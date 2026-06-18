// CONFIGURATION URLS
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTODzdeM_Wha98VVOuYgYDCvoKC4DoFQBvVrtxWEvsYD-zGB1yx4R4kqoPXt5Z01ACyib004ljEWCQL/pub?output=csv"; 
const sheetCsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyBbzCSmhFRRf3XeTPSKeXTyTxG1xqqXMbg6egp-4c41x527lUtLjAFwTjb_JQlQlT3lsfy-0CEtxm/pub?output=csv'; 
const rotationInterval = 10000; 

// GLOBAL VARIABLES
let quizData = []; 
let adsData = []; 
let currentAdIndex = 0; 
let rotationTimer = null; 
let currentQuestionIndex = 0; 
let score = 0; 
let dbSaved = false; 
let db; 
let isReading = false;

// DATABASE CONFIG
const DB_NAME = 'RamayanaQuizDB'; 
const DB_VERSION = 2; 
const STORE_HISTORY = '_history'; 
const STORE_STATE = 'quiz_current_state'; 
const dbName = "AdRotationDB"; 
const storeName = "adsStore"; 

// 1. QUIZ LOGIC & INDEXED DB
function toggleText() { 
    var text = document.getElementById("myText"); 
    var button = document.getElementById("toggleBtn"); 
    if (text.style.display === "none") { 
        text.style.display = "block"; 
        button.innerHTML = "छिपाएं (Hide)"; 
    } else { 
        text.style.display = "none"; 
        button.innerHTML = "दिखाएं (Show)"; 
    } 
} 

function initDB() { 
    const request = indexedDB.open(DB_NAME, DB_VERSION); 
    request.onupgradeneeded = function(e) { 
        let dbInstance = e.target.result; 
        if (!dbInstance.objectStoreNames.contains(STORE_HISTORY)) { dbInstance.createObjectStore(STORE_HISTORY, { keyPath: "timestamp" }); } 
        if (!dbInstance.objectStoreNames.contains(STORE_STATE)) { dbInstance.createObjectStore(STORE_STATE, { keyPath: "id" }); } 
    }; 
    request.onsuccess = function(e) { db = e.target.result; fetchQuestionsFromSheet(); }; 
    request.onerror = function() { alert("डेटाबेस लोड करने में समस्या आई।"); }; 
} 

async function fetchQuestionsFromSheet() { 
    try { 
        const response = await fetch(SHEET_CSV_URL); 
        if (!response.ok) throw new Error("Network response was not ok"); 
        const data = await response.text(); 
        quizData = parseCSV(data); 
        if(quizData.length === 0) { document.getElementById("loading-ui").innerText = "गूगल शीट से कोई डेटा प्राप्त नहीं हुआ।"; return; } 
        checkSavedState(); 
    } catch (error) { 
        console.error("Error fetching sheet data:", error); 
        document.getElementById("loading-ui").innerText = "डेटा लोड करने में विफल। कृपया इंटरनेट कनेक्शन या शीट लिंक चेक करें।"; 
    } 
} 

function parseCSV(text) { 
    let lines = []; let row = [""]; let inQuotes = false; 
    for (let i = 0; i < text.length; i++) { 
        let c = text[i]; let next = text[i+1]; 
        if (c === '"') { if (inQuotes && next === '"') { row[row.length - 1] += '"'; i++; } else { inQuotes = !inQuotes; } } 
        else if (c === ',' && !inQuotes) { row.push(''); } 
        else if ((c === '\r' || c === '\n') && !inQuotes) { if (c === '\r' && next === '\n') { i++; } lines.push(row); row = ['']; } 
        else { row[row.length - 1] += c; } 
    } 
    if (row.length > 1 || row[0] !== '') lines.push(row); 
    if (lines.length < 2) return []; 
    const headers = lines[0].map(h => h.trim().toLowerCase()); 
    const result = []; 
    for (let i = 1; i < lines.length; i++) { 
        const currentLine = lines[i]; if (currentLine.length < headers.length) continue; 
        const rowData = {}; 
        headers.forEach((header, index) => { rowData[header] = currentLine[index] ? currentLine[index].trim() : ""; }); 
        if (rowData.quote || rowData.question) { 
            result.push({ quote: rowData.quote, anuwad: rowData.anuwad ? `<strong>अनुवाद:</strong> ${rowData.anuwad}` : "", question: rowData.question, options: [rowData.option1, rowData.option2, rowData.option3, rowData.option4].filter(Boolean), answer: parseInt(rowData.answer, 10) || 0 }); 
        } 
    } 
    return result; 
} 

function checkSavedState() { 
    const transaction = db.transaction([STORE_STATE], "readonly"); 
    const store = transaction.objectStore(STORE_STATE); 
    const request = store.get("current_game"); 
    request.onsuccess = function(e) { 
        const savedState = e.target.result; 
        if (savedState && savedState.index < quizData.length) { 
            currentQuestionIndex = savedState.index; 
            score = savedState.score; 
            alert(`आपकी पिछली प्रोग्रेस मिल गई है! प्रश्न संख्या ${currentQuestionIndex + 1} से खेल फिर से शुरू हो रहा है।`); 
        } else { currentQuestionIndex = 0; score = 0; } 
        document.getElementById("loading-ui").style.display = "none"; 
        document.getElementById("quiz-ui").style.display = "block"; 
        loadQuestion(); 
    }; 
} 

function saveCurrentState() { if (!db) return; const transaction = db.transaction([STORE_STATE], "readwrite"); const store = transaction.objectStore(STORE_STATE); store.put({ id: "current_game", index: currentQuestionIndex, score: score }); } 
function clearSavedState() { if (!db) return; const transaction = db.transaction([STORE_STATE], "readwrite"); const store = transaction.objectStore(STORE_STATE); store.delete("current_game"); } 

function loadQuestion() { 
    dbSaved = false; saveCurrentState(); const currentQuiz = quizData[currentQuestionIndex]; 
    document.getElementById("progress-text").innerText = `Question: ${currentQuestionIndex + 1}/${quizData.length}`; 
    document.getElementById("score-text").innerText = `Score: ${score}`; 
    let samvaadHTML = `<div class="shlok-text">${currentQuiz.quote}</div>`; 
    if(currentQuiz.anuwad) { samvaadHTML += `<div class="anuwad-text">${currentQuiz.anuwad}</div>`; } 
    document.getElementById("samvaad-box").innerHTML = samvaadHTML; 
    document.getElementById("question-box").innerHTML = currentQuiz.question; 
    const optionsBox = document.getElementById("options-box"); optionsBox.innerHTML = ""; 
    currentQuiz.options.forEach((option, index) => { 
        const li = document.createElement("li"); const button = document.createElement("button"); 
        button.type = "button"; button.className = "quiz-option-btn"; button.innerHTML = option; 
        button.onclick = () => checkAnswer(index, button); li.appendChild(button); optionsBox.appendChild(li); 
    }); 
    document.getElementById("next-btn").disabled = true; 
} 

function checkAnswer(selectedIndex, selectedButton) { 
    const currentQuiz = quizData[currentQuestionIndex]; const optionsButtons = document.querySelectorAll(".quiz-option-btn"); 
    optionsButtons.forEach(btn => btn.disabled = true); 
    if (selectedIndex === currentQuiz.answer) { selectedButton.classList.add("correct"); score++; document.getElementById("score-text").innerText = `Score: ${score}`; } 
    else { selectedButton.classList.add("wrong"); if(optionsButtons[currentQuiz.answer]) { optionsButtons[currentQuiz.answer].classList.add("correct"); } } 
    document.getElementById("next-btn").disabled = false; saveCurrentState(); 
} 

function nextQuestion() { currentQuestionIndex++; if (currentQuestionIndex < quizData.length) { loadQuestion(); } else { showResults(); } } 
function showResults() { clearSavedState(); document.getElementById("quiz-ui").style.display = "none"; document.getElementById("result-ui").style.display = "block"; document.getElementById("final-score").innerText = `${score} / ${quizData.length}`; if (!dbSaved) { saveGameResult(score, quizData.length); } } 
function saveGameResult(finalScore, totalQuestions) { if (!db) return; const transaction = db.transaction([STORE_HISTORY], "readwrite"); const store = transaction.objectStore(STORE_HISTORY); const gameRecord = { timestamp: new Date().getTime(), score: finalScore, total: totalQuestions }; store.add(gameRecord).onsuccess = function() { dbSaved = true; readHistoryAndFeedback(); }; } 

function readHistoryAndFeedback() { 
    const transaction = db.transaction([STORE_HISTORY], "readonly"); const store = transaction.objectStore(STORE_HISTORY); 
    store.getAll().onsuccess = function(event) { 
        const attempts = event.target.result; const totalAttempts = attempts.length; 
        let feedbackHTML = `You answered ${score} questions correctly.<br><br><strong>System Statistics:</strong><br>Total Attempts Recorded: ${totalAttempts}<br>`; 
        if (totalAttempts > 1) { const previousAttempts = attempts.slice(0, -1); const maxPreviousScore = Math.max(...previousAttempts.map(a => a.score)); feedbackHTML += `Your previous highest score was: ${maxPreviousScore}/${quizData.length}`; } 
        else { feedbackHTML += `This is your first recorded attempt.`; } 
        document.getElementById("feedback-text").innerHTML = feedbackHTML; 
    }; 
} 
function restartQuiz() { currentQuestionIndex = 0; score = 0; clearSavedState(); document.getElementById("result-ui").style.display = "none"; document.getElementById("quiz-ui").style.display = "block"; loadQuestion(); } 

// 2. GOOGLE TRANSLATE & AUDIO LOGIC
function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'auto', includedLanguages: 'hi,en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element'); } 
function toggleLanguage() { var combo = document.querySelector('.goog-te-combo'); if (combo) { combo.value = (combo.value === 'hi') ? 'en' : 'hi'; combo.dispatchEvent(new Event('change')); } } 

function toggleAudio() { 
    var mainContent = document.getElementById('main-post-content'); var ttsContentDiv = document.getElementById('post-content-to-read'); 
    if (mainContent && ttsContentDiv) { ttsContentDiv.textContent = mainContent.textContent; } 
    if (!isReading) { window.speechSynthesis.cancel(); const textToSpeak = ttsContentDiv.textContent.trim() || document.body.innerText; const msg = new SpeechSynthesisUtterance(textToSpeak); msg.lang = 'hi-IN'; msg.onend = () => isReading = false; window.speechSynthesis.speak(msg); isReading = true; } 
    else { window.speechSynthesis.cancel(); isReading = false; } 
} 

// 3. SHARE SYSTEM LOGIC
function shareCurrentPage() { 
    let currentUrl = window.location.href.split('?')[0]; const pageUrl = currentUrl + '?m=1'; let fullTitle = document.title; let pageTitle = fullTitle.split(':').pop().trim(); let postContent = ''; 
    try { const contentElement = document.getElementById('main-post-content'); if (contentElement) { postContent = contentElement.innerText || contentElement.textContent; } } catch (e) { console.error("Could not find post content element.", e); } 
    let firstLine = postContent.length > 0 ? postContent.substring(0, 120).trim() + "..." : 'यह जानकारी बहुत महत्वपूर्ण है, जरूर देखें।'; 
    const shareText = `${pageTitle}\n${firstLine}`; 
    if (navigator.share) { navigator.share({ title: pageTitle, text: shareText, url: pageUrl }).catch((error) => console.error('Sharing failed', error)); } 
    else { alert('लिंक कॉपी करें और शेयर करें:\n\n' + shareText + '\n\n' + pageUrl); } 
}

// 4. AD ROTATION SYSTEM LOGIC
function openDB() { return new Promise((resolve, reject) => { const request = indexedDB.open(dbName, 1); request.onupgradeneeded = (e) => { const db = e.target.result; if (!db.objectStoreNames.contains(storeName)) { db.createObjectStore(storeName, { keyPath: "id" }); } }; request.onsuccess = (e) => resolve(e.target.result); request.onerror = (e) => reject(e.target.error); }); } 
async function saveAdsToLocal(ads) { try { const db = await openDB(); const tx = db.transaction(storeName, "readwrite"); const store = tx.objectStore(storeName); store.put({ id: "cachedAds", data: ads, timestamp: Date.now() }); } catch(e) { console.error(e); } } 
async function getAdsFromLocal() { try { const db = await openDB(); return new Promise((resolve) => { const tx = db.transaction(storeName, "readonly"); const store = tx.objectStore(storeName); const request = store.get("cachedAds"); request.onsuccess = () => resolve(request.result ? request.result.data : null); request.onerror = () => resolve(null); }); } catch(e) { return null; } } 
function parseAdsCSV(csvText) { const lines = csvText.split(/\r?\n/); const result = []; if(lines.length < 2) return result; for (let i = 1; i < lines.length; i++) { if (!lines[i]) continue; const currentLine = lines[i].split(','); if (currentLine.length >= 3) { result.push({ image: currentLine[0].trim(), url: currentLine[1].trim(), alt: currentLine[2].trim() }); } } return result; } 

async function initAdsRotation() { 
    adsData = await getAdsFromLocal() || []; 
    if(adsData.length > 0) { showAd(); startRotation(); } 
    try { 
        const response = await fetch(sheetCsvUrl); 
        if(response.ok) { 
            const text = await response.text(); const freshAds = parseAdsCSV(text); 
            if(freshAds.length > 0) { adsData = freshAds; saveAdsToLocal(freshAds); if(!rotationTimer) { showAd(); startRotation(); } } 
        } 
    } catch(e) { console.log("Offline or Ads fetch failed."); } 
} 

function showAd() { 
    if(adsData.length === 0) return; 
    const ad = adsData[currentAdIndex]; const container = document.getElementById("bottom-ad-container"); const img = document.getElementById("ad-image"); const link = document.getElementById("ad-link"); const txt = document.getElementById("ad-text"); 
    if(container && img && link && txt) { img.src = ad.image; img.alt = ad.alt; link.href = ad.url; txt.innerText = ad.alt; container.style.display = "block"; }
} 

function startRotation() { if(adsData.length <= 1) return; rotationTimer = setInterval(() => { currentAdIndex = (currentAdIndex + 1) % adsData.length; showAd(); }, rotationInterval); } 
function closeAd() { clearInterval(rotationTimer); const container = document.getElementById("bottom-ad-container"); if(container) container.style.display = "none"; } 

// TRIGGER EVERYTHING ON WINDOW LOAD
window.onload = function() { 
    initDB(); 
    initAdsRotation(); 
};

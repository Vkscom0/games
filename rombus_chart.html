
<html lang="hi">
<head>
    <meta charset="UTF-8"></meta>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
    <title id="page-title-element">एडवांस्ड रोम्बस डेटा ट्री टेबल</title>
    <style>
        :root {
            --primary-color: #2c3e50;
            --accent-color: #3498db;
            --cell-width: 100px;
            --cell-height: 100px;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* मुख्य कंट्रोल पैनल */
        .controls {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            margin-bottom: 20px;
            width: 95%;
            max-width: 1200px;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            align-items: center;
            justify-content: space-between;
        }

        .section-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .title-input-group input, .link-input, .size-number-input {
            padding: 6px 10px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .size-number-input { width: 55px; }

        /* सेल फ़ॉर्मेटिंग टूलबार */
        .formatting-toolbar {
            background: #eef2f7;
            padding: 12px 20px;
            border-radius: 6px;
            width: 95%;
            max-width: 1200px;
            margin-bottom: 30px;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            align-items: center;
            border-left: 5px solid var(--accent-color);
        }

        .btn {
            padding: 6px 14px;
            font-size: 13px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s;
        }
        .btn-tool { background: #fff; border: 1px solid #ccc; color: #333; }
        .btn-tool.active { background: #3498db; color: white; border-color: #3498db; }
        .btn-undo { background: #e67e22; color: white; }
        .btn-redo { background: #2ecc71; color: white; }
        .btn-add { background-color: #2ecc71; color: white; }
        .btn-del { background-color: #e74c3c; color: white; }
        .btn-track { background-color: #1abc9c; color: white; font-size: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
        .btn-download { background-color: #9b59b6; color: white; }
        .btn-print { background-color: #34495e; color: white; }
        .btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .slider-group {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 13px;
            font-weight: bold;
        }

        #display-title {
            color: var(--primary-color);
            margin: 10px 0;
            font-size: 26px;
        }

        /* रोम्बस टेबल स्ट्रक्चर */
        .table-container {
            padding: 150px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            overflow: auto;
        }

        .rhombus-table {
            border-collapse: collapse;
            transform: rotate(45deg);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            background: #fff;
        }

        .rhombus-table td {
            width: var(--cell-width);
            height: var(--cell-height);
            border: 2px solid #fff;
            padding: 0;
            text-align: center;
            vertical-align: middle;
            position: relative;
            transition: background-color 0.2s;
            cursor: pointer;
            overflow: hidden;
        }

        .rhombus-table td.selected-cell {
            outline: 3px solid #f1c40f;
            outline-offset: -3px;
            z-index: 10;
        }

        /* कंटेंट अन-रोटेशन (-45deg) */
        .cell-content {
            box-sizing: border-box;
            width: 141.4%; /* Diagonal bounding box sync */
            height: 141.4%;
            margin-left: -20.7%;
            margin-top: -20.7%;
            transform: rotate(-45deg);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 12px;
            overflow: hidden;
        }

        /* सेल इनपुट फ़ील्ड */
        .cell-content input {
            width: 100%;
            background: transparent;
            border: none;
            text-align: center;
            outline: none;
            font-family: inherit;
            padding: 2px 0;
            box-sizing: border-box;
        }

        .link-indicator {
            font-size: 10px;
            color: #f1c40f;
            text-decoration: underline;
            margin-top: 2px;
            font-weight: bold;
            display: block;
            white-space: nowrap;
        }

        /* ट्रैक डेटा मॉडल/पॉपअप स्टाइल */
        .modal {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        .modal-content {
            background: white;
            padding: 25px;
            border-radius: 8px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        .tree-node {
            margin-left: 20px;
            border-left: 2px dashed #ccc;
            padding-left: 10px;
            margin-top: 5px;
        }
        .tree-leaf {
            background: #f8f9fa;
            padding: 6px;
            margin: 4px 0;
            border-radius: 4px;
            font-size: 13px;
        }

        @media print {
            .controls, .formatting-toolbar { display: none !important; }
            body { background: white; padding: 0; }
            .table-container { padding: 180px 0; overflow: visible; }
            .print-text { display: block !important; }
            .cell-content input { display: none; }
        }
        .print-text { display: none; }
    </style>
</head>
<body>

    <!-- मुख्य कंट्रोल पैनल -->
    <div class="controls">
        <div class="section-group">
            <div class="title-input-group">
                <input id="table-title" oninput="updateTitle(this.value)" placeholder="टेबल टाइटल..." type="text" value="मेरा रोम्बस टेबल" />
            </div>
            <button class="btn btn-add" onclick="modifyGrid('add')">+ Row/Col</button>
            <button class="btn btn-del" onclick="modifyGrid('remove')">- Row/Col</button>
        </div>
        
        <div class="section-group">
            <div class="slider-group">
                <label>चौड़ाई:</label>
                <input id="width-slider" max="200" min="70" oninput="syncCellSize('width', this.value)" type="range" value="100" />
                <input class="size-number-input" id="width-number" max="200" min="70" oninput="syncCellSize('width', this.value)" type="number" value="100" /> px
            </div>
            <div class="slider-group">
                <label>ऊंचाई:</label>
                <input id="height-slider" max="200" min="70" oninput="syncCellSize('height', this.value)" type="range" value="100" />
                <input class="size-number-input" id="height-number" max="200" min="70" oninput="syncCellSize('height', this.value)" type="number" value="100" /> px
            </div>
        </div>

        <div class="section-group">
            <button class="btn btn-download" onclick="downloadHTML()">HTML डाउनलोड</button>
            <button class="btn btn-print" onclick="window.print()">प्रिंट / PDF</button>
        </div>
    </div>

    <!-- सेल फ़ॉर्मेटिंग टूलबार + ट्रैक बटन -->
    <div class="formatting-toolbar">
        <button class="btn btn-undo" id="btn-undo" onclick="undo()" title="Undo">↩️ Undo</button>
        <button class="btn btn-redo" id="btn-redo" onclick="redo()" title="Redo">↪️ Redo</button>
        
        <button class="btn btn-track" onclick="openTrackModal()" title="डेटा एक्सप्लोर ट्री ट्रैक करें">🔍 Track Data Tree</button>
        
        <span id="toolbar-status" style="color: #555555; font-size: 13px; font-weight: bold; margin-left: 5px;">सेल चुनें...</span>
        
        <button class="btn btn-tool" id="btn-bold" onclick="toggleFormat('bold')">B</button>
        <button class="btn btn-tool" id="btn-underline" onclick="toggleFormat('underline')">U</button>
        
        <div class="slider-group">
            <label>टेक्स्ट साइज़:</label>
            <input id="cell-text-size" max="32" min="8" oninput="applyTextSize(this.value)" style="padding: 4px; width: 45px;" type="number" value="14" /> px
        </div>

        <div class="slider-group">
            <label>टेक्स्ट:</label>
            <input id="cell-text-color" onchange="applyTextColor(this.value)" type="color" value="#ffffff" />
        </div>

        <div class="slider-group">
            <label>सेल रंग:</label>
            <input id="cell-bg-color" onchange="applyBgColor(this.value)" type="color" value="#3498db" />
        </div>

        <button class="btn btn-tool" id="btn-wrap" onclick="toggleFormat('wrap')">Wrap Text</button>

        <div class="slider-group">
            <input class="link-input" id="cell-hyperlink" onchange="applyHyperlink(this.value)" placeholder="https://..." style="width: 130px;" type="text" />
            <button class="btn btn-tool" onclick="clearHyperlink()" style="padding: 6px 8px;">Clear Link</button>
        </div>
    </div>

    <h2 id="display-title">मेरा रोम्बस टेबल</h2>

    <!-- टेबल ग्रिड -->
    <div class="table-container">
        <table class="rhombus-table" id="main-table">
            <tbody id="table-body"></tbody>
        </table>
    </div>

    <!-- डेटा ट्रैक करने का पॉपअप ट्री मॉडल -->
    <div class="modal" id="trackModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 style="color: var(--primary-color); margin: 0;">🌳 Explore Data Tree Tracking</h3>
                <button onclick="closeTrackModal()" style="background: transparent; border: none; cursor: pointer; font-size: 20px;">×</button>
            </div>
            <div id="treeContainer"></div>
        </div>
    </div>

<script>
    const dbName = "RhombusAdvancedTreeDB";
    const storeName = "tableStore";
    let db, selectedRow = null, selectedCol = null;

    let undoStack = [];
    let redoStack = [];

    // IndexedDB Setup
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = (e) => {
        db = e.target.result;
        db.createObjectStore(storeName, { keyPath: "id" });
    };
    request.onsuccess = (e) => {
        db = e.target.result;
        loadTableData();
    };

    let state = {
        id: "current_table",
        title: "मेरा रोम्बस डेटा ट्री",
        size: 3,
        cellWidth: 100,
        cellHeight: 100,
        matrix: [
            [{v:"Root", b:true, u:false, s:14, c:"#ffffff", w:false, l:"", bg:""}, {v:"Node_A", b:false, u:false, s:14, c:"#ffffff", w:false, l:"", bg:""}, {v:"Node_B", b:false, u:false, s:14, c:"#ffffff", w:false, l:"", bg:""}],
            [{v:"Child_1", b:false, u:false, s:14, c:"#ffffff", w:false, l:"", bg:""}, {v:"Data_1", b:false, u:false, s:14, c:"#ffffff", w:false, l:"", bg:""}, {v:"Data_2", b:false, u:false, s:14, c:"#ffffff", w:false, l:"", bg:""}],
            [{v:"Child_2", b:false, u:false, s:14, c:"#ffffff", w:false, l:"", bg:""}, {v:"Data_3", b:false, u:false, s:14, c:"#ffffff", w:false, l:"", bg:""}, {v:"Data_4", b:false, u:false, s:14, c:"#ffffff", w:false, l:"", bg:""}]
        ]
    };

    function createDefaultCell(val = "") {
        return { v: val, b: false, u: false, s: 14, c: "#ffffff", w: false, l: "", bg: "" };
    }

    function cloneState(obj) { return JSON.parse(JSON.stringify(obj)); }

    function saveHistory() {
        undoStack.push(cloneState(state));
        redoStack = []; 
        updateUndoRedoButtons();
    }

    function undo() {
        if (undoStack.length > 0) {
            redoStack.push(cloneState(state));
            state = undoStack.pop();
            renderTable();
            saveTableData(false); 
            updateUndoRedoButtons();
            if(selectedRow !== null) selectCell(selectedRow, selectedCol);
        }
    }

    function redo() {
        if (redoStack.length > 0) {
            undoStack.push(cloneState(state));
            state = redoStack.pop();
            renderTable();
            saveTableData(false);
            updateUndoRedoButtons();
            if(selectedRow !== null) selectCell(selectedRow, selectedCol);
        }
    }

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'z') { e.preventDefault(); undo(); }
        if (e.ctrlKey && e.key === 'y') { e.preventDefault(); redo(); }
    });

    function updateUndoRedoButtons() {
        document.getElementById('btn-undo').disabled = undoStack.length === 0;
        document.getElementById('btn-redo').disabled = redoStack.length === 0;
    }

    function syncCellSize(type, val) {
        if(!val || val < 70 || val > 200) return;
        saveHistory();
        if(type === 'width') {
            state.cellWidth = parseInt(val);
            document.getElementById('width-slider').value = val;
            document.getElementById('width-number').value = val;
        } else {
            state.cellHeight = parseInt(val);
            document.getElementById('height-slider').value = val;
            document.getElementById('height-number').value = val;
        }
        applyCSSVars();
        renderTable(); // Recalculate fit-to-shrink on resizing
        saveTableData(false);
    }

    function applyCSSVars() {
        document.documentElement.style.setProperty('--cell-width', state.cellWidth + 'px');
        document.documentElement.style.setProperty('--cell-height', state.cellHeight + 'px');
    }

    function renderTable() {
        document.getElementById('table-title').value = state.title;
        document.getElementById('display-title').innerText = state.title;
        document.getElementById('page-title-element').innerText = state.title;
        
        applyCSSVars();

        const tbody = document.getElementById('table-body');
        tbody.innerHTML = '';

        for(let r = 0; r < state.size; r++) {
            const tr = document.createElement('tr');
            for(let c = 0; c < state.size; c++) {
                const td = document.createElement('td');
                const cellData = state.matrix[r][c] || createDefaultCell();
                
                td.style.backgroundColor = cellData.bg || ((r === 0 || c === 0) ? 'var(--primary-color)' : 'var(--accent-color)');
                if(selectedRow === r && selectedCol === c) td.className = 'selected-cell';

                td.onclick = (e) => {
                    if(e.target.tagName !== 'INPUT' && e.target.tagName !== 'A') selectCell(r, c);
                };

                let styleStr = `color: ${cellData.c};`;
                if(cellData.b) styleStr += 'font-weight: bold;';
                if(cellData.u) styleStr += 'text-decoration: underline;';
                
                // Wrap vs Fit-2-shrink logic implementation
                let inputStyle = "";
                if (cellData.w) {
                    inputStyle = 'white-space: normal; word-break: break-word;';
                } else {
                    inputStyle = 'white-space: nowrap;';
                }

                let textMarkup = `<input type="text" value="${cellData.v}" data-row="${r}" data-col="${c}" id="input-${r}-${c}" onfocus="saveHistory()" oninput="updateCellText(this)" onclick="selectCell(${r},${c})" style="${styleStr} ${inputStyle}">`;
                let linkIndicator = cellData.l ? `<a href="${cellData.l}" target="_blank" class="link-indicator" title="${cellData.l}">🔗 Open Link</a>` : '';

                td.innerHTML = `
                    <div class="cell-content">
                        ${textMarkup}
                        ${linkIndicator}
                        <span class="print-text" style="${styleStr}">${cellData.v}</span>
                    </div>
                `;
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        // Apply Fit-To-Shrink dynamically after DOM injection
        setTimeout(adjustAllFonts, 10);
    }

    // Dynamic Engine for Fit to Shrink
    function adjustAllFonts() {
        for(let r = 0; r < state.size; r++) {
            for(let c = 0; c < state.size; c++) {
                const cellData = state.matrix[r][c];
                const inputEl = document.getElementById(`input-${r}-${c}`);
                if (!inputEl) continue;

                if (cellData.w) {
                    // Wrap text mode: fixed size configured by user
                    inputEl.style.fontSize = cellData.s + "px";
                } else {
                    // Fit-to-shrink mode: Reduce font size dynamically until it fits boundaries
                    let currentSize = cellData.s;
                    inputEl.style.fontSize = currentSize + "px";
                    
                    // 85% of standard container space allowed for safely handling inner rotation bounds
                    let maxAllowedWidth = state.cellWidth * 1.1; 
                    
                    while (inputEl.scrollWidth > maxAllowedWidth && currentSize > 8) {
                        currentSize--;
                        inputEl.style.fontSize = currentSize + "px";
                    }
                }
            }
        }
    }

    function updateCellText(input) {
        const r = parseInt(input.getAttribute('data-row'));
        const c = parseInt(input.getAttribute('data-col'));
        state.matrix[r][c].v = input.value;
        
        // Auto shrink triggers instantly while typing
        if (!state.matrix[r][c].w) {
            let cellData = state.matrix[r][c];
            let currentSize = cellData.s;
            input.style.fontSize = currentSize + "px";
            let maxAllowedWidth = state.cellWidth * 1.1;
            while (input.scrollWidth > maxAllowedWidth && currentSize > 8) {
                currentSize--;
                input.style.fontSize = currentSize + "px";
            }
        }
        saveTableData(false);
    }

    function selectCell(r, c) {
        selectedRow = r; selectedCol = c;
        document.querySelectorAll('.rhombus-table td').forEach(el => el.classList.remove('selected-cell'));
        const table = document.getElementById('main-table');
        if(table.rows[r] && table.rows[r].cells[c]) table.rows[r].cells[c].classList.add('selected-cell');

        const cell = state.matrix[r][c];
        document.getElementById('toolbar-status').innerText = `R${r+1}C${c+1}:`;
        
        document.getElementById('btn-bold').classList.toggle('active', cell.b);
        document.getElementById('btn-underline').classList.toggle('active', cell.u);
        document.getElementById('btn-wrap').classList.toggle('active', cell.w);
        document.getElementById('cell-text-size').value = cell.s;
        document.getElementById('cell-text-color').value = cell.c;
        document.getElementById('cell-bg-color').value = cell.bg || ((r === 0 || c === 0) ? '#2c3e50' : '#3498db');
        document.getElementById('cell-hyperlink').value = cell.l || "";
    }

    function toggleFormat(type) {
        if(selectedRow === null) return;
        saveHistory();
        const cell = state.matrix[selectedRow][selectedCol];
        if(type === 'bold') cell.b = !cell.b;
        if(type === 'underline') cell.u = !cell.u;
        if(type === 'wrap') cell.w = !cell.w;
        
        renderTable();
        saveTableData(false);
        setTimeout(() => selectCell(selectedRow, selectedCol), 15);
    }

    function applyTextSize(val) {
        if(selectedRow === null || !val) return;
        saveHistory();
        state.matrix[selectedRow][selectedCol].s = parseInt(val);
        renderTable();
        saveTableData(false);
    }

    function applyTextColor(val) {
        if(selectedRow === null) return;
        saveHistory();
        state.matrix[selectedRow][selectedCol].c = val;
        renderTable();
        saveTableData(false);
    }

    function applyBgColor(val) {
        if(selectedRow === null) return;
        saveHistory();
        state.matrix[selectedRow][selectedCol].bg = val;
        renderTable();
        saveTableData(false);
    }

    function applyHyperlink(val) {
        if(selectedRow === null) return;
        saveHistory();
        if(val && !/^https?:\/\//i.test(val)) val = 'https://' + val;
        state.matrix[selectedRow][selectedCol].l = val;
        renderTable();
        saveTableData(false);
    }

    function clearHyperlink() {
        if(selectedRow === null) return;
        saveHistory();
        state.matrix[selectedRow][selectedCol].l = "";
        renderTable();
        saveTableData(false);
        selectCell(selectedRow, selectedCol);
    }

    function updateTitle(newTitle) {
        state.title = newTitle;
        document.getElementById('display-title').innerText = newTitle;
        document.getElementById('page-title-element').innerText = newTitle;
        saveTableData(false);
    }

    function modifyGrid(action) {
        saveHistory();
        if(action === 'add') {
            state.size++;
            if(state.matrix.length < state.size) state.matrix.push([]);
            for(let i=0; i<state.size; i++) {
                while(state.matrix[i].length < state.size) state.matrix[i].push(createDefaultCell());
            }
        } else if(action === 'remove' && state.size > 1) {
            state.size--;
            state.matrix.pop();
            for(let i=0; i<state.size; i++) state.matrix[i].pop();
            selectedRow = null; selectedCol = null;
        }
        renderTable();
        saveTableData(false);
    }

    /* 🌳 डेटा एक्सप्लोरर ट्री ट्रैकिंग सिस्टम फंक्शनलिटी */
    function openTrackModal() {
        const container = document.getElementById('treeContainer');
        container.innerHTML = "";
        document.getElementById('trackModal').style.display = "flex";

        // ट्री व्यू जनरेट करना (Row आधारित पेरेंट नोड्स)
        for(let r = 0; r < state.size; r++) {
            const rowNode = document.createElement('div');
            rowNode.className = "tree-node";
            rowNode.innerHTML = `<strong style="color:var(--primary-color);">📁 Row Hierarchy ${r+1}</strong>`;
            
            for(let c = 0; c < state.size; c++) {
                const cell = state.matrix[r][c];
                const leaf = document.createElement('div');
                leaf.className = "tree-leaf";
                
                let valText = cell.v.trim() ? `"${cell.v}"` : `<em style="color:#999;">[Empty Cell]</em>`;
                let linkText = cell.l ? ` | 🔗 Link: <a href="${cell.l}" target="_blank" style="color:var(--accent-color);">${cell.l}</a>` : "";
                let modeText = cell.w ? " [Wrap]" : " [Fit-To-Shrink]";

                leaf.innerHTML = `🔹 <strong>Col ${c+1}:</strong> ${valText} <span style="font-size:11px; color:#666;">${modeText}${linkText}</span>`;
                rowNode.appendChild(leaf);
            }
            container.appendChild(rowNode);
        }
    }

    function closeTrackModal() {
        document.getElementById('trackModal').style.display = "none";
    }

    function saveTableData(clearRedo = true) {
        if (!db) return;
        const transaction = db.transaction([storeName], "readwrite");
        transaction.objectStore(storeName).put(state);
    }

    function loadTableData() {
        if (!db) return;
        const request = db.transaction([storeName], "readonly").objectStore(storeName).get("current_table");
        request.onsuccess = () => {
            if(request.result) state = request.result;
            renderTable();
            updateUndoRedoButtons();
        };
    }

    function downloadHTML() {
        let cleanHTML = `<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<title>${state.title}</title>\n`;
        cleanHTML += `<style>
            body { font-family: sans-serif; background: #f5f7fa; text-align: center; padding: 40px; }
            .table-container { padding: 150px 0; display: flex; justify-content: center; align-items: center; }
            .rhombus-table { border-collapse: collapse; transform: rotate(45deg); box-shadow: 0 10px 30px rgba(0,0,0,0.15); background: #fff; }
            .rhombus-table td { width: ${state.cellWidth}px; height: ${state.cellHeight}px; border: 2px solid #fff; padding: 0; text-align: center; vertical-align: middle; overflow:hidden;}
            .cell-content { transform: rotate(-45deg); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 5px; box-sizing: border-box; }
            .cell-link { text-decoration: underline; font-weight: bold; display: block; margin-top: 4px; font-size: 11px; }
        </style>\n</head>\n<body>\n<h2>${state.title}</h2>\n<div class="table-container">\n<table class="rhombus-table"><tbody>`;
        
        for(let r=0; r<state.size; r++) {
            cleanHTML += "<tr>";
            for(let c=0; c<state.size; c++) {
                const cell = state.matrix[r][c];
                let currentBg = cell.bg || ((r === 0 || c === 0) ? '#2c3e50' : '#3498db');
                let inlineStyle = `color: ${cell.c}; font-size: ${cell.s}px;`;
                if(cell.b) inlineStyle += 'font-weight: bold;';
                if(cell.u) inlineStyle += 'text-decoration: underline;';
                let wrapStyle = cell.w ? 'white-space: normal; word-break: break-all;' : 'white-space: nowrap;';
                
                let textNode = `<span style="${inlineStyle} ${wrapStyle}">${cell.v}</span>`;
                let linkNode = cell.l ? `<a href="${cell.l}" target="_blank" class="cell-link" style="color: #f1c40f;">🔗 Link</a>` : '';
                
                cleanHTML += `<td style="background-color: ${currentBg};"><div class="cell-content">${textNode}${linkNode}</div></td>`;
            }
            cleanHTML += "</tr>";
        }
        cleanHTML += `</tbody></table></div>\n</body>\n</html>`;

        const blob = new Blob([cleanHTML], { type: "text/html" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${state.title.replace(/\s+/g, '_')}.html`;
        a.click();
    }
</script>
</body>
</html>

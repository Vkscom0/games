await OneSignal.init({
  appId: "https://vkscom0.github.io",
  serviceWorkerPath: "OneSignalSDKWorker.js",
  serviceWorkerParam: { scope: "/games/" },
});
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

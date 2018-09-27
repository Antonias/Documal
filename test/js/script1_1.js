/* JavaScriptサンプル */

// 10秒ごとにリロードします。<br>
var timer = "3000"; //指定ミリ秒単位
function CloseWindow() {
      window.open('about:blank','_self').close();
    }
setTimeout(CloseWindow, timer);

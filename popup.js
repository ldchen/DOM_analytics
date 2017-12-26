document.addEventListener("DOMContentLoaded", () => {
    var num = document.links.length;
    document.getElementById("second").innerHTML = `There are ${num} links on the page`;
}
);

function getTabDOM(){
    var queryInfo = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(queryInfo, (tabs) => {
        chrome.tabs.executeScript(tabs[0].id, {"file": "send_DOM.js"});
    });
}

getTabDOM();
chrome.runtime.onMessage.addListener((msg) => {
    document.getElementById("first").innerHTML = `There are ${msg.length} links on the page`;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log("onCompleted");
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["contentScript.js"],
    });
  }
});

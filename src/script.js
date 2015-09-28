chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    'document.body.style.backgroundColor="red"'
    //do some stuff here
  });
});
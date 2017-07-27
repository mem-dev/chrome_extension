var forStackOverflow = require('./site_specific_scripts/forStackOverflow');

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === forStackOverflow.reportText) {
    sendResponse(document.all[0]
      .querySelector(forStackOverflow.topicQuerySelector).innerText);
  }
});
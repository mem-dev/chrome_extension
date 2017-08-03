import config from './config/environment';
import apiHandler from './utils/apiHandler';
import loginCheck from './utils/loginCheck';


const getNotificationId = () => {
  let id = Math.floor(Math.random() * 9007199254740992) + 1;
  return id.toString();
}

let showNotification = (selectionText) => {
  chrome.notifications.create(getNotificationId(), {
    type: 'basic',
    title: 'Success!',
    iconUrl: 'img/icon.png',
    message: `'${selectionText}' posted successfully to CodeCode Ninja`}, () => {
      console.log('The error ', chrome.runtime.lastError)
  });
}

let contextMenuItem = {
  id: "ccn",
  title: "Post to CodeCode Ninja",
  contexts: ["selection"]
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((event) => {

  const onSuccess = () => {
    if(event.menuItemId == contextMenuItem.id && event.selectionText) {
      let formData = new FormData();
      formData.append('snippet[back_content]', event.selectionText);
      formData.append('snippet[source]', event.pageUrl);

      // to test the notification
      showNotification(event.selectionText);

      apiHandler('POST', '/snippets', formData, function(res) {
        if (res.status === 200) {
          chrome.notifications.create('1', {message: `'${event.selectionText}' posted successfully to CodeCode Ninja`});
        } else {
          chrome.notifications.create('1', {message: `An error prevented'${event.selectionText}' from posting successfully to CodeCode Ninja`});
        }
      })
    }
  }

  const onError = () => {
    chrome.tabs.create({ url: `${config.host}/login` });
  }

  loginCheck(onError, onSuccess);

})



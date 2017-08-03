import config from './config/environment';
import apiHandler from './utils/apiHandler';
import loginCheck from './utils/loginCheck';

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

      apiHandler('POST', '/snippets', formData, function(res) {
        alert(`'${event.selectionText}' posted successfully to CodeCode Ninja`);
      })
    }
  }

  const onError = () => {
    chrome.tabs.create({ url: `${config.host}/login` });
  }

  loginCheck(onError, onSuccess);

  // chrome.cookies.get({ url: config.host, name: 'DFTT_END_USER_EMAIL' },
  //   function (cookie) {
  //     if (cookie) {
  //     }
  //     else {
  //     }
  //   }
  // );
})



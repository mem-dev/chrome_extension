class PasteFromActiveTab {
  static init(sitesConfig) {
    this.sitesConfig = sitesConfig;
    this.pasteClipboardIntoTextBox();
    this.pasteFromActiveTab();
  }

  static pasteClipboardIntoTextBox() {
    let codeText = document.getElementsByName('code');
    codeText[0].select();
    document.execCommand('paste');
    let createSnippetBtn = document.getElementById('createSnippet');
    createSnippetBtn.focus();
  }

  static pasteFromActiveTab () {
    chrome.tabs.getSelected(null, (tab) => {
      this.pasteSourceUrl(tab.url);
      this.pasteTopic(tab);
    });
  }

  static pasteTopic (tab) {
    let replaceTopic = function(topic) {
      document.getElementById('topic').value = topic;
    }

    this.sitesConfig.forEach(siteConfig => {
      if (siteConfig.matches(tab.url)) {
        chrome.tabs.sendMessage(tab.id, {text: siteConfig.reportText}, replaceTopic);
      }
    })
  }

  static pasteSourceUrl (url) {
    document.getElementById('source_url').value = url;
  }
}

export default PasteFromActiveTab;
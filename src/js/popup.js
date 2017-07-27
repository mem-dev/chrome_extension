import '../css/popup.css';
import apiHandler from './utils/apiHandler';
import InitializeCard from './helpers/initializeCard';

import forStackoverflow  from './site_specific_scripts/forStackOverflow';

document.addEventListener('DOMContentLoaded', function() {

  let closeBtn = document.getElementById('close-btn');
  closeBtn.addEventListener('click', function(e) {
    window.close();
  })

  let showSuccessPage = () => {
    document.querySelector('.create-snippet-form').className += ' hide';
    document.querySelector('.create-snippet-success').className += ' show';
  }

  let createSnippetBtn = document.getElementById('createSnippet');
  createSnippetBtn.addEventListener('click', function(e) {
    showSuccessPage();
    chrome.tabs.getSelected(null, function(tab) {
      let myForm = document.getElementsByName('createCard')[0];
      let formData = new FormData(document.querySelector('form'))

      apiHandler('POST', '/cards', formData, function(res) {
        console.log(res)
      })

    });
  }, false);

  let sitesConfig = [ forStackoverflow ];

  InitializeCard.init(sitesConfig);

}, false);

import '../css/popup.css';
import apiHandler from './utils/apiHandler';
import loginCheck from './utils/loginCheck';
import InitializeCard from './helpers/initializeCard';
import config from './config/environment';

import forStackoverflow  from './site_specific_scripts/forStackOverflow';

document.addEventListener('DOMContentLoaded', function() {

  let closeBtn = document.getElementById('close-btn');

  closeBtn.addEventListener('click', function(e) {
    window.close();
  });

  let showSecondaryMessage = () => {
    document.querySelector('.create-snippet-form').className += ' hide';
    document.querySelector('.secondary-message').className += ' show';
  };

  let showSuccessPage = () => {
    showSecondaryMessage();

    let el = document.createElement('p');
    el.onclick = (e) => {
      chrome.tabs.create({ url: `${config.host}/cards` });
    };

    el.innerHTML = `
        <h2>Snipped created!</h2>
        <p><a href="#">Convert your new snippet into an interactive flashcard</a></p>
    `;

    document.querySelector('.secondary-message').appendChild(el);
  };

  let showLoginPrompt = () => {
    showSecondaryMessage();
    let el = document.createElement('p');
    el.onclick = (e) => {
      chrome.tabs.create({ url: `${config.host}/login` });
    };

    el.innerHTML = `
        <h2>You are not logged in</h2>
        <p><a href="#">Click here to log into Code Code Ninja so you can securely use this extension.</a></p>
    `;
    document.querySelector('.secondary-message').appendChild(el);
  };

  let toggleError = (show = '') => {
    document.querySelector('.error').className = `error ${show}`;
  }

  let createSnippetBtn = document.getElementById('createSnippet');

  createSnippetBtn.addEventListener('click', function(e) {
    toggleError();
    e.preventDefault();
    chrome.tabs.getSelected(null, function(tab) {
      let myForm = document.querySelector('form');
      let formData = new FormData(myForm);

      apiHandler('POST', '/snippets', formData, function(res) {
        if (res.status === 200) {
          showSuccessPage();
        } else {
          toggleError('show');
        }
      })

    });
  }, false);

  loginCheck(showLoginPrompt);

  let sitesConfig = [ forStackoverflow ];

  InitializeCard.init(sitesConfig);

}, false);

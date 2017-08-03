import config from  '../config/environment';

const loginCheck = (onError, onSuccess = () => {}) => {
  chrome.cookies.get({ url: config.host, name: 'DFTT_END_USER_EMAIL' },
    function (cookie) {
      if (cookie) {
        onSuccess();
      }
      else {
        onError();
      }
    }
  );
}

export default loginCheck;
import constants from '../config/constants';

export default {
  topicQuerySelector: '#question-header a',
  reportText: 'report_back_stackoverflow',
  matches: function(url) {
    return constants.STACKOVERFLOW_URL_REGEX.test(url)
  }
};
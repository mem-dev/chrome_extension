import config from '../config/environment';

const apiReq = (verb, url, data, callback) => {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === 4) callback(req);
  }

  req.open(verb.toUpperCase(), (config.api + url), true);
  req.send(data);
}

export default apiReq;


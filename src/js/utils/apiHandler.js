import config from '../config/environment';

const apiReq = (verb, url, data, callback) => {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      callback(req.responseText);
    } else if (req.status === 404 && req.readyState === 4) {
      callback({error: "An error occured"});
    }
  }

  req.open(verb.toUpperCase(), (config.api + url), true);
  req.send(data);
}

export default apiReq;


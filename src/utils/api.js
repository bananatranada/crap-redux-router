import path from 'path';
import fetch from 'isomorphic-fetch';

import config from '../config';

export function api(resource, method, obj) {
  resource = path.normalize(`/${resource}`);
  return fetch(`${config.api}${resource}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Auth-Bearer': obj ? obj.authToken : '',
    },
    body: JSON.stringify(obj),
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

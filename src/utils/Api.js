export const date = {
  headers: {
    baseUrl: 'http://localhost:4000/',
    'Content-Type': 'application/json'
  },
};

const callbackWithRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`error${res.status}`);
}

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getAllBanks() {
    return fetch('http://localhost:4000', {
      headers: this.headers,
    })
    .then(callbackWithRes)
  }

  setBankInfo(bik, name, corrAccount, address) {
    return fetch('http://localhost:4000/add', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({ bik, name, corrAccount, address }),
    })
    .then(callbackWithRes)
  }

  addNewBank(bik, name, corrAccount, address) {
    return fetch('http://localhost:4000/add', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ bik, name, corrAccount, address }),
    })
    .then(callbackWithRes)
  }
}

const api = new Api(date);
export default api;

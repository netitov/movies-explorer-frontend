class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Some error')
  }


  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }
}


const MoviesApi = new Api ({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    authorization: 'd0f4e15e-5e8f-4105-8cb3-71e6a52f3645',
    'content-type': 'application/json'
  }
});

export default MoviesApi

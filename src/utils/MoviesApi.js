import { MOVIES_API } from './config'

  function checkServerResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Some error')
  }

  export function getInitialMovies() {
    return fetch(MOVIES_API, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(checkServerResponse);
  }



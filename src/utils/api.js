const API_URL = (process.env.NODE_ENV !== 'production') ?
  'http://localhost:8000/api' :
  'http://localhost:8000/api';

export const API = (url, method = 'GET', payload = '', CUSTOM_URL = '') => {
    const apiUrl = (CUSTOM_URL === '') ? `${API_URL}${url}` : `${CUSTOM_URL}${url}`;

    const token = localStorage.getItem('token2t2');

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };

    let options =  {
      method: method,
      headers: headers,
      // mode: 'no-cors'
    };

    if (payload !== '' && payload.length !== 0) {
      options = Object.assign(options, { body: JSON.stringify(payload) } );
    }

    console.log('URL: ', apiUrl, 'HEADERS: ', headers, 'OPTIONS: ', options);

    return new Promise((res, rej) => {
      // if (url !== '/login' && !token) {
      //   return rej('User is not authorized');
      // }

      fetch(apiUrl, options)
        .then(response => {
          if (response.ok) {
            return response.json().then(res);
          } else {
            if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
              response.json().then(rej);
            } else {
              return response.text().then(rej);
            }
          }
        })
        .catch(rej);
    });
  };

  export const setToken = token => localStorage.setItem(token);

  export const login = (email, password) => API('/login', 'POST', { email, password });

  // News
  export const getNewsList = (id = '') => API(`/newest/${id}`, 'GET');
  export const addNews = (payload) => API('/news', 'POST', payload);
  export const editNews = (id, payload) => API(`/news/${id}`, 'PUT', payload);

  // Artists
  export const getArtistsList = (id = '') => API(`/artists/${id}`, 'GET');
  export const addArtist = (payload) => API('/artist', 'POST', payload);
  export const editArtist = (id, payload) => API(`/artist/${id}`, 'PUT', payload);

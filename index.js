// Add a Request interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  config.timeout = 1500;
  appendJSONToDOM(config, '.beforeRequest');
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a Response interceptor
axios.interceptors.response.use((response) => {
  // Do something with response data
  response.statusText = "200OK hell yeah";
  appendJSONToDOM(response, '.afterRequest');
  return response;
}, (error) => {
  // Do something with response error
  return Promise.reject(error);
});

// Removing an interceptor
const myInterceptor = axios.interceptors.request.use(() => {});
axios.interceptors.request.eject(myInterceptor);

// Custom instance interceptor
const instance = axios.create();
instance.interceptors.request.use(() => {});

axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://reqres.in/api/users/3`)
  .then((response) => {
    appendJSONToDOM(response, '.response');
  })
  .catch((error) => {

  });

function appendJSONToDOM(data, container) {
  const el = document.createElement('pre');
  el.innerHTML = JSON.stringify(data, undefined, 2);
  document.querySelector(container).appendChild(el);
}
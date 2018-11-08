axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://reqres.in/api/users/3`)
  .then((response) => {
    document.querySelector('.container').innerHTML = `
      <pre>${JSON.stringify(response.data, undefined, 2)}</pre>
    `;
  })
  .catch((error) => {

  });

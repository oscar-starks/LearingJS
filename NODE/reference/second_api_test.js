const fetch = require('node-fetch'); 

const url = 'http://localhost:8000/accounts/login/';
const payload = {
  email:"test@gmail.com",
  password:"test",
}

fetch(url, {
  method: 'POST',
  body: new URLSearchParams(payload),
})

  .then(response => {
    return response.json().then(data => {
      return Object.assign({ status_code: response.status },(data))
    });
  })

  .then(data => {
    console.log(data);
  })
  
  .catch(error => {
    console.error('Error:', error);
  });

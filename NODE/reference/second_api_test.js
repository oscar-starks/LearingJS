const fetch = require('node-fetch'); // If you're running this in a Node.js environment

const url = 'http://localhost:8000/accounts/login/';
const payload = {
  email:"email@gmail.com",
  password:"email",
}


fetch(url, {
  method: 'POST',
  body: new URLSearchParams(payload),
})
  .then(response => {
    if (!response.ok) {
      console.log(response)
      throw new Error('Network response was not ok');
    }
    return response.json();
  })

  .then(data => {
    console.log(data);
  })
  
  .catch(error => {
    console.error('Error:', error);
  });

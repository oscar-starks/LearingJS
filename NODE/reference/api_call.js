const fetch = require('node-fetch'); // If you're running this in a Node.js environment

const url = 'https://easyaccess.com.ng/api/data.php';
const payload = {
  network: '01',
  mobileno: 'phone number',
  dataplan: 51,
};
const headers = {
  AuthorizationToken: 'token',
};

fetch(url, {
  method: 'POST',
  headers: headers,
  body: new URLSearchParams(payload),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })

  .then(data => {
    console.log(data);
  })
  
  .catch(error => {
    console.error('Error:', error);
  });

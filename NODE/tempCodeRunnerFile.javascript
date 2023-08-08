// async function fetchData() {
//     try {
//       const response = await fetch('https://easyaccess.com.ng/api/data.php');
      
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       console.log(data);

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   fetchData();


const response = await fetch('https://easyaccess.com.ng/api/data.php');
console.log(response)      

//   import requests

//   url = "https://easyaccess.com.ng/api/data.php"
//   payload = {
//       'network': '01',
//       'mobileno': '09017741269',
//       'dataplan': 51,
//   }
//   headers = {"AuthorizationToken": "4a1b9f809037d68c98d0695dc5638fa6"}
  
//   response = requests.post(url, data=payload, headers=headers)
  
//   print(response.text)
  
  

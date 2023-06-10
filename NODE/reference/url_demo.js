const url = require('url');
const my_url = new URL('http://mywebsite.com/hello.html?id=100&status=active');

console.log(my_url.href);
console.log(my_url.protocol);
console.log(my_url.host);
console.log(my_url.hostname);
console.log(my_url.port);
console.log(my_url.pathname);
console.log(my_url.search);
console.log(my_url.searchParams);
// console.log(my_url.hash);
my_url.searchParams.append('hello', '123')
console.log(my_url.searchParams);
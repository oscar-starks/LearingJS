const path = require('path');

// this if for the base file name
console.log(path.basename(__filename))

// this if for the file path
console.log(path.dirname(__filename))

// file extension
console.log(path.extname(__filename))

// create file object
console.log(path.parse(__filename))

// concatenate path
console.log(path.join(__dirname, 'folder_name','file.txt'))
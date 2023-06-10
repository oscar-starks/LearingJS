const fs = require('fs');
const path = require('path');

// this is to create a folder
fs.mkdir(path.join(__dirname, "/test_folders"), {}, err => {
    if (err) throw err;
    console.log("Created")
});

// this is to write a file
fs.writeFile(path.join(__dirname, "/test_folders", "hello.txt"), "this is the beninging",
    err => {
        if (err) throw err;
        console.log("Created")
});

// this is to read a file
fs.readFile(path.join(__dirname, "/test_folders", "hello.txt"), "utf8",
    (err, data) => {
        if (err) throw err;
        console.log(data)
});


// to rename a file
fs.rename(path.join(__dirname, "/test_folders", "hello.txt"), path.join(__dirname, "/test_folders", "helloworld.txt"),
    (err) => {
        if (err) throw err;
        console.log("file renamed")
});

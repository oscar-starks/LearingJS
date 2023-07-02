// this file is used to demonstrate how IIFEs(Immediately invoked function expressions) work in JavaScript

(function(variable) {
    console.log("this is a function expression")
    console.log(`${variable} is the function expression variable`)
})(5)
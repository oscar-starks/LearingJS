const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});


function getUserInput() {
    const randomNumber = Math.floor(Math.random() * 10);    
  
    r1.question("Enter a number: ", (answer) => {
        if (answer == randomNumber) {
        console.log(`You got it right. The number is ${randomNumber}`);
        r1.close();
    } else {
            console.log("Wrong. Try again.\n");
            getUserInput();
            }
    });
}

getUserInput()
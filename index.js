#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generates a random number.
// 2) user input for guessing number.
// 3) compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("welcome to number guessing game");
//if you don't want your answer is  0 then + 1 with the value of multiplication value
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 - 6:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulation! you guess a right number.");
}
else {
    console.log("you guessed a wrong number");
}

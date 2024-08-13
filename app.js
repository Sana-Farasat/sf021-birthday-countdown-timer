#! /usr/bin/env node
//Shebang
import chalk from "chalk";
import readline from "readline-sync";
function calculateCountdown(targetDate) {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();
    if (timeDifference <= 0) {
        console.log(chalk.redBright.italic('\n\n\t\t\t\tHappy Birthday!'));
        return;
    }
    //Milliseconds in one day                 1sec  1min  1hr  1day
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    console.log(chalk.yellowBright(`\n\n\t\t\t\tDays: ${days}`));
    console.log(chalk.yellowBright(`\n\t\t\t\tHours: ${hours}`));
    console.log(chalk.yellowBright(`\n\t\t\t\tMinutes: ${minutes}`));
    console.log(chalk.yellowBright(`\n\t\t\t\tSeconds: ${seconds}`));
}
function main() {
    console.log(chalk.redBright.italic.underline('\n\n\t\t\t\tWelcome to the Birthday Countdown Timer!'));
    // Get user input
    const dateString = readline.question(chalk.blueBright('\n\n\t\t\t\tEnter your birthday (YYYY-MM-DD): '));
    // Parse the input date
    const birthdayDate = new Date(dateString);
    if (isNaN(birthdayDate.getTime())) {
        console.log(chalk.redBright('\n\t\t\t\tInvalid date format. Please use YYYY-MM-DD.'));
        return;
    }
    // Ensure the countdown is set to the next occurrence of the birthday
    const now = new Date();
    let targetDate = new Date(birthdayDate);
    targetDate.setFullYear(now.getFullYear());
    if (targetDate < now) {
        targetDate.setFullYear(now.getFullYear() + 1);
    }
    // console.log(chalk.greenBright(`\n\n\t\t\t\tCountdown to ${targetDate.toDateString()}:`));
    //calculateCountdown(targetDate);
    // Update the countdown every second
    setInterval(() => {
        console.clear();
        console.log(chalk.greenBright.underline(`\n\n\t\t\t\tCountdown to ${targetDate.toDateString()}:`));
        calculateCountdown(targetDate);
    }, 1000);
}
main();

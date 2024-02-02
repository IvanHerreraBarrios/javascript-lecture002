let i = 0;
i = i + 1;
i++ // i = i + 1;
i--; // i = i -1
console.log(i);

const x = 3;
console.log("Print only when x is greater than 5");

const num = 6;

if (num < 10) {
    console.log("The number is less than 10");
} else if (num > 10) {
    console.log("The number is greater than 10");
} else {
    console.log("The number is equal to 10");
}

if (num >= 10 && num <= 20) {
    console.log("The number is between 10 and 20");
}

// The rest of the program
/**
 * if (<first condition>) {
 *    The code is executed if <first condition> is true
 * } else if (<second condition>){
 *    The code is executed if <first condition> is false, but <second condition> is true
 * } else {
 *    The code is executed if none of the conditions are met
 * }
 */
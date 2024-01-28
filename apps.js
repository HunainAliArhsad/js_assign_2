// var a= prompt('enter temperature in Celsius');
// let b= Number(a);
// if (b == 30 && b === 30){
//     alert('Its a hot day')
// }
// else{
//     alert('temperature is moderate')
// }

// =============================================================

    // Get user input

    // var subject1 = prompt("Enter marks for Subject 1");
    // let a= Number(subject1)
    // var subject2 = prompt("Enter marks for Subject 2");
    // let b= Number(subject2)
    // var subject3 = prompt("Enter marks for Subject 3");
    // let c= Number(subject3)

    // // Check if input is valid
    // if (a === Number , b === Number ,c === Number) {
    //     alert("Please enter valid marks for all subjects.");
    // } else {
    //     // Calculate total and average
    //     var totalMarks = a + b + c ;
    //     let percentage = (totalMarks / 300) * 100;

    //     // Determine grade based on average
    //     var grade = '';
    //     if (percentage >= 90) {
    //         grade = 'A';
    //     } else if (percentage >= 80) {
    //         grade = 'B';
    //     } else if (percentage >= 70) {
    //         grade = 'C';
    //     } else if (percentage >= 60) {
    //         grade = 'D';
    //     } else {
    //         grade = 'F';
    //     }

    //     // Display result
    //     alert('Total Marks: ' + totalMarks + '\npercentage: ' + percentage + '\nGrade: ' + grade);
    // }
// =============================================================// =============================================================


// let a1 = prompt("Enter the number for table");
// let a = Number(a1);
// let c;

// for (let b = 1; b <= 10; b++) {
//     c = a * b;
//     console.log(a + ' * ' + b + ' = ' + c);
// }
// =============================================================// =============================================================
// let b = 5;

// let factorial = 1;
// while (b >= 1) {
//     factorial *= b;
//     b--;
// }

// console.log('The factorial of 5 is:', factorial);
// =============================================================// ============================================================

// function greetUser(name) {
//     console.log("Hello " + name + "! I welcome you to this webpage. Feel free to explore!");
// }

// var userName = prompt("Enter your name");
// console.log(greetUser(userName));

// =============================================================// ============================================================



 function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

let userInput = prompt("Enter a number");
let number = parseInt(userInput);

console.log(isPrime(number));




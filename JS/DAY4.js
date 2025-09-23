//output method
console.log("FSD CLASS");

//input method
//let a = prompt("enter a nos:-");
//console.log(a);
var a = 20;
var a = 30;//can be redeclare
var a = 40;

let b = 30;
//let b = 38;// cant redeclare 
b =70;
{
    let name = "NIPUN";
    name = "XYZ";
    console.log("name: " + name);
    b = 659;
    console.log("AFTER REASSIGNMENT OF B VALUE: " + b);

}
// string
let firstname = "NIPUN";
let lastname = "MALIK";
let message = "HELLO";
let outputMessage = message + "," + firstname + " " + lastname + "!";
console.log(outputMessage);

let sum = "22" + 2 - 2;
console.log(sum);

//typechecking
console.log(typeof(sum));

//implicit type
let op = "22" - 2;
console.log(op + " type of op--: " + typeof(op));

let strToNum = "Hey" - 2;
console.log(strToNum + " " + typeof(strToNum));

const student = {
    rollno : 234,
    firstName :"NIPUN ",
    lastName :"MALIK",
}
console.log(typeof(student));
console.log(student[0]['firstName'])

console.log(a);
var a = 30;
console.log(message());  //invokation of function
function message(){
    console.log("HELLO FSD CLASS!");
}
function message(msg){
    console.log(msg);
}

//{
  //  var a = 50;
    //console.log(a);
//}
//console.log(a);

//EXPLICIT TYPE CONVERSION

//Number()
let strToNum = Number("12345");
console.log(strToNum + " " + typeof(strToNum ));

let numToStr = String(1234);
console.log(numToStr);

let numToBool = Boolean(0);
console.log(numToBool);

let row = 5;
for(let i = 1; i <= row; i++){
    let line = "";
    for(let j = 1; j <= 2*row-1; j++){
        if(j-i<=row-1 && j+i<row){
            line += "*";

        }else{
            line += " ";
        }
    }
    console.log(line);
}

//for in loop


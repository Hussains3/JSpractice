//first programe, calculator
var first = prompt("Enter your first number");//prompt used to take input form user
 var second = prompt("Enter your first second");
 var sum = Number(first) + Number(second);//Number used to make a steing into number
alert("Total " + sum);// alert used to print something in sceen


//if function
var name = prompt("What is your first name?");
if(name === "Sabbir"){
    alert ("Hello " + name);
}else if(name === "Reza"){
     alert ("Welcome " + name);
}
else{
     alert ("You are not permitted " + name);
};

function sum(first,second){
    alert(first + second);
};
function sub(first,second){
    alert(first + second);
};
function addition()
{
num1 = document.getElementById("num1").value;
num2 = document.getElementById("num2").value;
sum = parseInt(num1) + parseInt(num2);

document.write("The sum is " + sum);
}

function subtraction()
{
num1 = document.getElementById("num1").value;
num2 = document.getElementById("num2").value;
sub = parseInt(num1) - parseInt(num2);

document.write("The sum is " + sub);
}

function multiplication()
{
num1 = document.getElementById("num1").value;
num2 = document.getElementById("num2").value;
mul = parseInt(num1) * parseInt(num2);

document.write("The sum is " + mul);
}

function divition()
{
num1 = document.getElementById("num1").value;
num2 = document.getElementById("num2").value;
div = parseInt(num1) / parseInt(num2);

document.write("The sum is " + div);
}
function reset(){
document.getElementById("myform").reset();
}
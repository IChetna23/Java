function fun(name, greettext){
    // let name  = Chetna; -- block scope
    console.log(greettext + " "+ name);
    console.log(name);
}

name1  = "Chetna";
name2 = "Jaya";
name3 = "Abhay";
name4 = "Sunny";

let GreetText = "Good Morning";

fun(name1, GreetText);
fun(name2, GreetText);
fun(name3, GreetText);
fun(name4, GreetText);

function sum(a, b, c){
    d = a+b+c;
    return d;
}

let sum = sum(1,2,3); // global scope
console.log(sum);
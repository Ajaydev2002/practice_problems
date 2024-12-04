let age = prompt("Enter your age:");

if (age<=12){
    console.log("you are a child");
}
else if(age>=13 && age<=19){
    console.log("you are teenager");
}
else if(age>=20 && age<=64){
    console.log("you are adult");
}
else{
    console.log("you are senior");
}

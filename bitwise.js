serverUp = true;
if(serverUp){
    console.log("Server is running")    
}else{
    console.log("Server is down")
}



loggedIn=true;
serverUp=true;
if(loggedIn && serverUp){
    console.log("Welcome to the dashboard")
}else{
    console.log("Please login again or try later")
}


loggedIn=""
serverUp=true;
if(loggedIn && serverUp){
    console.log("Welcome to the dashboard")
}else{
    console.log("Please login again or try later")
}

loggedIn=null;
serverUp=true;
if(loggedIn && serverUp){
    console.log("Welcome to the dashboard")
}else{
    console.log("Please login again or try later")
}

loggedIn;
serverUp=true;
if(loggedIn && serverUp){
    console.log("Welcome to the dashboard")
}else{
    console.log("Please login again or try later")
}

a=10;
b=2;
console.log("Logical AND " + (a && b));  
console.log("Logical OR " + (a || b));  
console.log("Xor logic " + (a ^ b));
console.log("~Xor logic " + ~(a ^ b));


//lexiographic comparison
str1="apple"
str2="banana"
console.log("Greater than " + (str1 > str2));
console.log("Less than " + (str1 < str2));
console.log("Greater than or Equal to " + (str1 >= str2));
console.log("Less than or Equal to " + (str1 <= str2));

a=5; //0101
b=3; //0011
console.log("Bitwise AND " + (a & b));
console.log("Bitwise OR " + (a | b));
console.log("Bitwise XOR " + (a ^ b));
console.log("Bitwise NOT a " + (~a));
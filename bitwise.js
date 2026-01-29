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

m=10;
n=2;
console.log("Logical AND " + (m && n));  
console.log("Logical OR " + (m || n));  
console.log("Xor logic " + (m ^ n));
console.log("~Xor logic " + ~(m ^ n));                      

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


let p = [1, 2, 3];
let q = [...p, 4, 5];
console.log(q);


//let myName=["Prithinga","Senthilkumar"];
//let fullName=[...myName];
//console.log(fullName);


//comma operator
let x= (2,3,4,5);
console.log(x);

let y;
y=(10,20,30,40);
console.log(y);


let r=(1+2, 3+4, 5+6);
let s=r+10;
console.log(s);            

let o=(2,4,6,8)
let t=(6,4,1)
console.log(o,t)
console.log(o+t)


z=( (1+2), (3+4), (5+6) );
k=(10+o);
console.log(k);
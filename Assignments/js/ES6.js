//question 11//
const multiply=(a=1,b=1)=>a*b

//question 12//
const sqndcub=(n)=>({
    sq:n*n,
    cube:n^3
});
 console.log(sqndcub(7))

//question 13//
const people = [ { name: "Alice", 
    address: { city: "New York", 
        street: { name: "Broadway", 
            number: 123 } } }, 
    { name: "Bob", 
        address: { city: "Los Angeles", 
            street: { name: "Sunset Boulevard", 
                number: 456 } } } ]

const result = people.map(({ name, address: { city, street: { name: streetName } } }) => 
    `${name} lives in ${city} on ${streetName}`
);

console.log(result);  

//question 14//
const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };
const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };
const result2 = { 
    ...profile, 
    ...updates, 
    address: { ...profile.address, ...updates.address } 
};
console.log(result2);

//question 15//
userName="sree lalitha"
course="Media And Communication"
console.log(`hello ${userName}, welcome to the course ${course}!`);

const namee = "Sam";
const age = 21;
const student = {
  namee,
  age,
  greet() {
    console.log("Hello");
  }
};
student.greet();    


//question 16//
isEven=(num)=>num%2===0?true:false
console.log(isEven(4))

marks=42
marks>=35?console.log("pass"):console.log("fail")


const greet = (name) => console.log(name ? `Hello, ${name}` : "Hello, Guest");
greet("Sree");       
greet();   


//question 17// 

arr1 = [1, 2, 3];
arr2 = [4, 5];
const res = [...arr1,...arr2];
console.log(res);


const sum = (...nums) => {
  return nums.reduce((old, num) => old + num);
};
console.log(sum(1, 2, 3, 4, 5));


const user = {
  name1: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const { name1, address: { city , pin} } = user;
console.log(name1,city,pin);  


//question 18//
const profile1 = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile1?.user?.details?.email);
console.log(profile1?.user?.details?.phone);
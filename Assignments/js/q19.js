var number=7
var number1= 5
console.log(`${number}+ ${number1}=${number+number1}`)


const multilineString = `
Welcome to EmpowerHer!
This is a multiline string created using template literals.
Numbers: ${number} and ${number1}
Total: ${number + number1}
`;
console.log(multilineString);

firstName="Sree"
lastName="allamudi"
console.log(`Full Name: ${firstName} ${lastName}`)


const square = (n) => n * n;
console.log("1a) Square of 5:", square(5));


const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
// aroow function doesnt aceept this keyword//

const objnew = {  value: 50,
  test: function() {
    console.log( this.value);
  }
};
objnew.test();


const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);


const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);


const maxValue = (...nums) => Math.max(...nums);
console.log( maxValue(5, 10, 3, 8, 2));


const arr = [10, 20, 30];
const [first, second, third] = arr;
console.log( first, second);


const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log("Brand:", brand);


const info = {};
console.log(info?.address?.city);


for (var i = 0; i < 3; i++) {}
console.log(i);


//   for (let j = 0; j < 3; j++) {}
//   console.log(j);

let kmph = 70;
 speed = kmph > 60 ? "Fast" : "Normal";
console.log("5a) Speed:", speed);


age1 = 20;
 age1 = age1 >= 18 ? "Adult" : "Minor";
console.log(age1);


let num = -5;
let numStatus = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(numStatus);


const nums = [1, 2, 3];
const nums1 = [...nums, 4, 5];
console.log( nums1);


const arr1 = ["x", "y"];
const arr2 = ["z"];
const combined = [...arr1, ...arr2];
console.log(combined);


const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


const user = { id: 101, status: "active" };
const { id, statuss } = user;
console.log(id, "status:", statuss);


const Id = 101;
const role = "admin";
const Obj = { Id, role };
console.log(Obj);


const names = "Alice";
const age2 = 25;
const person = {
  names,
  age2,
  greet() {
    return `Hello, I'm ${this.names}`;
  }
};
console.log(person.greet());



console.log(new Date().toDateString());

const userName = "Sree";
const score = 85;
console.log("8b) " + `Hello ${userName}, your score is ${score}/100`);


const add = (x, y) => x + y;
console.log(add(5, 3));

const isAdult = (age) => age >= 18;
console.log(isAdult(20));

const double = (n) => n * 2;
console.log(double(7));


const original = [1, 2, 3];
const cloned = [...original];
console.log(cloned);


const numbers = [2, 3, 4];
const added = [100, ...numbers];
console.log(added);


const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };
const merged2 = { ...obj1, ...obj2 };
console.log(merged2);

const user2 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user2?.address?.city);
console.log(user2?.job?.title);

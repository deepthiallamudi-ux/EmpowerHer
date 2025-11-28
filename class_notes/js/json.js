const user={
    name: "Alice",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, " + this.name);
    }
}
console.log("Original Object:", user);
console.log(JSON.stringify(user)); // js object to json string
const m='{"name": "Alice", "age": 30,"city": "New York"}'
    console.log(JSON.parse(m)) // json string to js object
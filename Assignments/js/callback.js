
// const product = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 20 },
//   { name: "Monitor", price: 300 },
//   { name: "Keyboard", price: 45 },
//   { name: "Headphones", price: 75 },
//   { name: "USB Cable", price: 5 }
// ];

// function Products(productArr) {
//   const productNames = productArr.map(product => product.name);
  
//   console.log("Product Names:", productNames);
  
//   productArr.forEach(product => {
//      priceStatus = product.price >= 50 ? "above $50" : "below $50";
//     console.log(`${product.name} is ${priceStatus}`);
//   });
// }

// Products(product);


// scores = [
//   { "name": "Alice", "marks": 58 },
//   { "name": "Bob", "marks": 85 },
//   { "name": "Charlie", "marks": 92 },
//   { "name": "David", "marks": 45 },
//   { "name": "Emma", "marks": 76 },
//   { "name": "Frank", "marks": 63 },
//   { "name": "Grace", "marks": 89 },
//   { "name": "Hannah", "marks": 95 },
//   { "name": "Ian", "marks": 54 },
//   { "name": "Jack", "marks": 79 },
//   { "name": "Kate", "marks": 67 },
//   { "name": "Leo", "marks": 88 },
//   { "name": "Mia", "marks": 91 },
//   { "name": "Nathan", "marks": 72 },
//   { "name": "Olivia", "marks": 82 }
// ];

// function names(studentsArray) {

//    filterarr=studentsArray.filter(student => student.marks > 60);
  
//   sorted = filterarr.sort((a, b) => b.marks - a.marks);
  
//   names = sorted.map(student => student.name);
  
//   console.log(names)
// }
// names(scores)


// devices=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

// function countCat(categoriesArr) {

//   const categoryCount = categoriesArr.reduce((box, category) => {
//     box[category] = (box[category] || 0) + 1;
//     return box;
//   }, {});
  
//   return categoryCount;
// }

// const result = countCat(devices);
// console.log("Category Count Object:", result);


// function sortCategoriesByCount(categoriesArr) {
//   // Step 1: Use reduce() to count occurrences
//   const categoryCount = categoriesArr.reduce((acc, category) => {
//     acc[category] = (acc[category] || 0) + 1;
//     return acc;
//   }, {});
  
//   console.log("Category Count:", categoryCount);
  
//   // Step 2: Use Object.entries() to convert object to array of [key, value] pairs
//   const entries = Object.entries(categoryCount);
//   console.log("Object Entries:", entries);
  
//   // Step 3: Sort by count (value) in descending order
//   const sorted = entries.sort((a, b) => b[1] - a[1]);
//   console.log("Sorted by Count:", sorted);
  
//   // Step 4: Extract category names from sorted array
//   const sortedCategories = sorted.map(([category, count]) => `${category} (${count})`);
  
//   return sortedCategories;
// }

// const finalResult = sortCategoriesByCount(categories);
// console.log("Final Sorted Categories:", finalResult);
// // Output: ["toys (3)", "electronics (2)", "clothing (2)"]

employee= [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

]
function bestOne(employeesArray) {

//   const filtered = employeesArray.filter(employee => employee.tasksCompleted > 5); 
//   rating=filtered.map((employee)=>{
//     if(employee.rating>4.5){
//         console.log("Excellent");
//     }
//    else if(employee.rating > 3 && employee.rating<4.5){
//         console.log("Good");
//     }   
//     else
//         console.log("Needs Improvement");
//     }   );
//     return {
//       name: employee.name,
//       rating: employee.rating
//     };
// }

// bestOne(employee);
  
  const mapped = filtered.map(emp => {
    let performanceLevel;
    
    if (emp.rating > 4.5) {
      performanceLevel = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      performanceLevel = "Good";
    } else {
      performanceLevel = "Needs Improvement";
    }
    
    return {
      name: emp.name,
      performanceLevel: performanceLevel,
      rating: emp.rating
    };
  });
  
//   console.log("Step 2 - Mapped with Performance:", mapped);
  
//   // Step 3: Sort by performance level (Excellent > Good > Needs Improvement)
//   const performanceOrder = { "Excellent": 1, "Good": 2, "Needs Improvement": 3 };
  
//   const sorted = mapped.sort((a, b) => {
//     return performanceOrder[a.performanceLevel] - performanceOrder[b.performanceLevel];
//   });
  
//   console.log("Step 3 - Final Sorted Array:", sorted);
  
//   return sorted;
// }

// const result = topEmployees(employee);
// console.log("\n--- FINAL RESULT ---");
// result.forEach(emp => {
//   console.log(`${emp.name}: ${emp.performanceLevel} (Rating: ${emp.rating})`);
// });
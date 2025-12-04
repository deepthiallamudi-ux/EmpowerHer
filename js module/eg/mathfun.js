
const PI=3.14159;

 export  default function areaOfCircle(radius){
    return PI * radius * radius;
}  
// export function circumferenceOfCircle(radius){
//     return 2 * PI * radius;
// }
// export function volumeOfSphere(radius){
//     return (4/3) * PI * radius * radius * radius;
// }

//this is named module export i.e we can export multiple items
//can also do default export for single item
// default export means we can import only one item without curly braces
//DOm navigation----navigating the structure of the DOM tree using js
//firstelementchild
//.lastelementchild 
//.parentelement
//.nextelementsibling
//.previouselementsibling
//.children

// const elee=document.getElementById("fruits");
//     const f=elee.firstElementChild.style.color="red";
//     //f.style.color="red";
    
// const elem=document.getElementById("vegetables");
//     const fst=elem.firstElementChild.style.color="green";
// const ele=document.querySelectorAll("ul");
// ele.forEach((ele)=>{
//     const lst=ele.firstElementChild.style.backgroundColor="yellow";
// });

// const ele1=document.querySelectorAll("ul");
// ele1.forEach((ele1)=>{
//     ele1.lastElementChild.style.color="palevioletred";
// }
// );

const ele2=document.getElementById("potato"); //we have to give id to the element
ele2.nextElementSibling.style.color="blue";  // next element  is changed
ele2.previousElementSibling.style.color="brown"; // previous element is changed

const ele4=document.getElementById("vegetables"); //we have to give id to the element
const f1=ele4.children;
Array.from(f1).forEach((child)=>{
    child.style.fontWeight="bold";
    child.style.backgroundColor="green";
}
);
//const ele3=document.getElementById("fruitis"); if we give parent name whole body chzanges
const ele3=document.getElementById("app"); //we have to give id to the element
const f11=ele3.parentElement;
    f11.style.fontWeight="bold";
    f11.style.backgroundColor="orange";
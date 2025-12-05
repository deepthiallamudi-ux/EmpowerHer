//modularity
function createData(){
    fetch('https://masai-9b8ce-default-rtdb.firebaseio.com/data.json',{
       method:"POST",
       body:JSON.stringify({
           name:"John Doe",
           age:30,
           city:"New York"
         },
         {name:"surabhi",
           age:30,
           city:"Nezivedu"
         }
        )
    })
    .then((res)=>res.json())
    .then((data)=>{console.log("Data created:",data);
    })
    .catch((err)=>{console.log("Error creating data:",err);
    }); 
}
function getData(){
    fetch('https://masai-9b8ce-default-rtdb.firebaseio.com/data.json')
    .then((res)=>res.json())
    .then((data)=>{console.log("Data retrieved:",data);
    })
    .catch((err)=>{console.log("Error retrieving data:",err);
    });
}

//update
function updateData(){
    fetch('https://masai-9b8ce-default-rtdb.firebaseio.com/data/-OfV5Y6s0GteqlvZMpVQ .json',{
       method:"PUT",
       body:JSON.stringify({
        name:" deepthi",
           age:27,
           city:"New York"})
// method:"PATCH",partially update;
// method:"PUT",fully update;

})
.then((res)=>{res.json()})
.then((data)=>{console.log("Data updated:",data);
})
.catch((err)=>{console.log("Error updating data:",err);
});
}

 function deleteData(){
   fetch('https://masai-9b8ce-default-rtdb.firebaseio.com/data/-OfV5Y6s0GteqlvZMpVQ.json',{method:"DELETE"})
   .then((res)=>res.json())
   .then((data)=>{console.log("Data deleted:",data);
   })
   .catch((err)=>{console.log("Error deleting data:",err);
   });

}
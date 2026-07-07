//put

fetch("https://jsonplaceholder.typicode.com/posts/1",{  
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
        "name":"mern batch",
        "batch-no":1,
        "id":1
    })
})
.then((res)=>res.json())
.then((val)=>{
    console.log(val);
})


//POST
fetch("https://jsonplaceholder.typicode.com/posts",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify({
    "name":"Mern batch",
    "batch-no":1,
    "id":1
  })

})
.then((res)=>res.json())
.then((val)=>{
  console.log(val)
})

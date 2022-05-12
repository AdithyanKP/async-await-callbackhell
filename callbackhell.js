function add(num1,num2,sum){
    let err=false
    if(num1===0){
        err=true
    }
    sum(num1+num2,err)
}
 function multiply(num1,num2,sum){
     sum(num1*num2)
 }
 function div(num1,num2,sum){
     sum(num1 /num2)
 }
const { resolve, reject } = require("promise")
/* add(10,20,(sum,err)=>{
    if (err){
        console.log("First Number is zero");
    }else{
        console.log(sum);
        multiply(sum,sum,(product)=>{
            console.log(product);
            div(20,10,(division)=>{
                console.log(division);
            })
        })
    }
    
}) */
const promise=require("promise")
 function add(num1,num2){
     return new promise((resolve,reject)=>{
         if(num1==0){
             reject("First Number is Zero")
         }
         resolve(num1+num2)
     })
 }
 function multiply(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1==0){
            reject("First Number is Zero")
        }
        resolve(num1*num2)
    })
}
 add(10,20).then((sum)=>{
     console.log(sum);
     return multiply(2,5)
 }).then((product)=>{
     console.log(product);
 })
 .catch((err)=>{
     console.log(err);
 })

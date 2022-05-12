
const promise=require('promise')

function getName(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Adithyan K P")
        },3000)
    })
}
function getMobile(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("6238531028")
        },2000)
    })
}
/* promise.all([getName(),getMobile()]).then((result)=>{
console.log(result);
}) */
 async function getuser(){
     let name= await getName()
     console.log(name)
     let mobile=await getMobile()
     console.log(mobile);
 }
getuser()
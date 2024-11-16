
// const count = 10;

// let promise = new Promise ((resolve, reject)=>{
//     if (count<= 15){
//         resolve("There is a count");
//     }else{
//         reject("there is no count");
//     }
// });
// console.log(promise); 

//promise is an Object which represent the completion or failure of asynchronous operation .it commonly use for handing ansychronous 
//like fetch API , file reading and waiting for a time

// const myPromise = new Promise((resolve, reject)=>{
//     let success = false;
//     if (success){
//         resolve("task completed");
//     }
//     else {
//         reject("task incomplete");
//     }
// })
// console.log(myPromise);

const myPromise = new Promise((resolve, reject) =>{

    let A = 21;

    if (A > 20) {
        resolve ("Ananya");
    }
    else{
        reject ("Shweta");
    }
})
// console.log(myPromise); 

myPromise // here we wrote only var name 
.then ((result) =>{
    console.log(result);
    
})
.catch ((error) =>{
    console.log(error);
})
// .finally(()=>{
//     console.log("resolve , reject");
    
// })

console.log(`"""""""""""""promise in a function""""""""""""""`);

// function makeMaggi(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const maggi= true;
//             if (maggi){
//                 resolve("maggi is there")
//             }
//             else{
//                 reject("maggi is not there");
//             }
//         }, 5000);
//     })
// }
// makeMaggi()
// .then(result => console.log(result))
// .catch (error => console.log(error))
// .finally(()=> console.log("maggi is ready"))


// function doYoga(){
//     return Promise = new Promise ((resolve, reject)=>{

//         setTimeout(() =>{
//             const yoga = true;

//             if (yoga) {
//                 resolve("Yes You Will be fit");
                
//             }
//             else{
//                 reject("you will be Weak");
//             }
//         },5000)
//     });
// }
// doYoga()
// .then(result => console.log(result))
// .catch(error => console.log((error)))
// .finally(() => console.log("your yoga is done nicely"))



function doCode(){
    return Promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const code = false;
            if(code) {
                resolve ("yes you Know Programming")
            }
            else{
                reject("you are learning")
            }
        },3000)
    })
}
doCode()
.then(result => console.log(result))
.catch(error => console.log((error)))
.finally(() => console.log("you are a Techiee person"))

// types of promise 
//1 promise.all()
//take an array of promise and wait for all them to be fulfilled
//if the one promise is rejected then the whole promise.ll will reject 

Promise.all ([promise1, promise2, promise3])
.catch ( result => console.log(result))
.then (error => console.log(error))
//2 promise.race()
//take 1 array of promise and return the first settless (either fulfilled or rejected)

























































































































































































var obj ={name:"ajex",age:12,address:"lko"}
console.log(obj.name);
delete obj.age

// for in loop  

for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}
// property ans shorthand 

function a(name,age,address){
    return{
        name:name,age:age,address:address
    }
}
let obj2=a("ajex",12,"lko")
console.log(obj2);  // return object 

// propery name limiation 
let obj3={
    for:1,
    let:2,
    return:3
}
console.log(obj3.for+obj3.let+obj3.return);  //return 6

let obj4={
    for:1,
    let:"sfkdsjkjf",
    return:3
}
console.log(obj4.for+obj4.let+obj4.return); //return 


// cpying and

let m = "hello"
let mess= m // this is cpoying

let obje={name:"ajex",age:12}
let obje1=obje  //copy the reference


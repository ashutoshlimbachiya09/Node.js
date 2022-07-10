const str = '10,20,30,40,50,60,70';
const array = str.split(',')
let sum = 0;
const sArray = array.map((element)=>{
    sum += parseInt(element)
    return element
})
console.log(sum,'this is sum')
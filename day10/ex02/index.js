export default async function main(){
    console.log("hello es6")

var a=1

console.log('a :  ${a} ')
a=a+1
console.log('a :  ${a} ')

let b=1
b+= 5
console.log('b :  ${b} ')

const c=1
// c+=1
console.log('c: ${c}')

let a1=1
console.log('a1: ${a1}')
{
    let a1=3
    a1 +=1             
    console.log('a1: ${a1}')
    // a1이 한옥마을에 놀러갔음.
}
console.log('a1: ${a1}')
// 디버깅하는 법 꼭 알아두라고 하심.

}



// 상수에 대해서는 3가지만 알면 된다.
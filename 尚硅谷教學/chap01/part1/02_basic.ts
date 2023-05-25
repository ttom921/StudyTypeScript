//聲明一個變量，同時設定它的類型為number
let a: number;

a = 10;
a = 33;
//a='hello';此行代碼會有錯誤

let b: string;
//b=10;
b = "hello";

let c = false;
c = true;
//c=10;

// //JS中的函式是不管參數的類型
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(123, 456));
// console.log(sum(123, '456'))

function sum(a: number, b: number) {
    return a + b;
}
sum(123, 456);
//sum(123,"456")
export { };
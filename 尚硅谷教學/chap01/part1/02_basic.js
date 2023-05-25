//聲明一個變量，同時設定它的類型為number
var a;
a = 10;
a = 33;
//a='hello';此行代碼會有錯誤
var b;
//b=10;
b = "hello";
var c = false;
c = true;
//c=10;
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
console.log(sum(123, '456'));

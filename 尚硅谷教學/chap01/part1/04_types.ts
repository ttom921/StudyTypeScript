//object 表示一個對象
let a: object;
a = {};
a = function () {

}

//{} 用來指定對𡩀中可以包含哪些屬性
// 語法: {屬性名:屬性值,屬性名:屬性值,屬性名:屬性值,}
// 在屬性名後邊加上?,表示屬性是可選的
let b: {
    name: string;
    age?: number;
};
//b={};error
b = { name: "tommy", age: 18 };

//[progName:string]:any 表示任意類型的屬性
let c: { name: string, [propName: string]: any };
c = { name: 'terry', age: 18, gender: 'male' };

/**  
 * 設罝函數結構的類型聲明：
 *  語法: (形參:類型,形參:類型,...) => 返回值
*/
let d: (a: number, b: number) => number;
d = function (n1, n2) {
    return n1 + n2;
}

// string[] 表示字符串數組
let e: string[];
e = ['a', 'b', 'c'];

// number[] 表示數值數組
let f: number[];
f = [1, 2, 3, 4, 5, 6]

let g: Array<number>;
g = [1, 2, 3, 4, 5];

/** 
 * 元組，就是固定長度的數組
 *  語法: [類型,類型,類型,]
*/

let h: [string, string];
h = ['hello', 'mmmm']


/** 
 * enum 枚舉
*/
enum Gender {
    Male,
    Femal,
}
let i: { name: string, gender: Gender };
i = {
    name: 'terry',
    gender: Gender.Male,
};
console.log(i.gender === Gender.Male);

// & 表示同時
let j: { name: string } & { age: number };
j = {
    name: 'terry',
    age: 15
}

// 類型的別名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
k = 2;
//--------------------
// let decimal: number = 6;
// let hxe: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;
// let big: bigint = 100n;

//let isDone: boolean = false;

// let color: string = "blue";
// color = 'red';

// let fullName: string = 'Bob Bobbington';
// let age: number = 37;
// let sentence: string = `Hello,my name is ${fullName}},
// i'll be ${age + 1} years old next month.`;

// let color: 'red' | 'blue' | 'black';
// let num: 1 | 2 | 3 | 4 | 5;


// let d: any = 4;
// d = 'hello';
// d = true;

// let notSure:unknown=4;
// notSure='hello';

// function error(message:string):never {
//     throw new Error(message);
// }

// let obj: object = {};


// let list: number[] = [1, 2, 1];
// let list1:Array<number>=[1,2,3];

// let x: [string, number];
// x = ["hello", 10];

// enum Color {
//     Red,
//     Green,
//     Blue,
// }
// let c: Color = Color.Green

// enum Color {
//     Red = 1,
//     Green,
//     Blue
// }
// let c: Color = Color.Green

// enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 4,
// }
// let c: color = Color.Green;
export { };
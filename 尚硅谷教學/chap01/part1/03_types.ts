//也可以使用字面量來進行聲明

let a: 10;
a = 10;
//a=11; error

//若以使用 | 來連接多個類型(聯合類型)
let b: "male" | "female";
b = "male";
b = "female";
//b = "hello" error

let c: boolean | string;
c = true;
c = "hello";
//c=10; error

// any 表示的是任意類型 一個訬是設置類型為any就相當於對該變量關閉了TS的類型檢測
//使用TS時，不建議使用any類型
let d;
d = 10;
d = 'hello';
d = true;

//unknown 表示未知類型的值
let e: unknown;
e = 10;
e = "hello";
e = true;

//d的類型是any, 它可以賦值給依意變是
let s: string;
//s = d;

e = "hello";
//unknow 實際上就是一個類型安全的any
//unknow 類型的變量，不能直接賦值給其他變數
//s = e;
//方法一
if (typeof e === "string") {
    s = e;
}
//方法二
//類型斷言
s = e as string;
//方法三
s = <string>e;

export { };

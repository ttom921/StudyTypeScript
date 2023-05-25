"use strict";
class Dog {
    // constructor 被稱為構造函數
    // 構造函數會在對象創建時調用
    constructor(name, age) {
        console.log("constructor run");
        //在實例方法中，this𧚱表示當前的實例
        //在構造函數中當前對象就是當前新建的那個對象
        //可以通過this向新建的對象中添加屬性
        console.log("this=", this);
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log("wo..wo....");
        //在方法中可以通過this來表示當前調用方法的對象
        console.log(this);
    }
}
const dog = new Dog("小黑", 4);
const dog2 = new Dog("小白", 2);
// console.log(dog);
// console.log(dog2);
dog.bark();

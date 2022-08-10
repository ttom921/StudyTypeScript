"use strict";
let maxwell = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
    printInfo() {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Owns a pet? ${this.hasPet}
      `);
    },
};
let martin = {
    name: 'Martin',
    age: 24,
    hasPet: true,
    printInfo() {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Owns a pet? ${this.hasPet}
      `);
    },
};
let toby = {
    name: 'Toby',
    age: 32,
    hasPet: false,
    printInfo() {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Owns a pet? ${this.hasPet}
      `);
    },
};
// 將介面 PersonInfo 轉換成類別的形式
class CPersonInfo {
    constructor() {
        this.name = 'Maxwell';
        this.age = 20;
        this.hasPet = false;
    }
    printInfo() {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Owns a pet? ${this.hasPet}
      `);
    }
}
// 從類別建立出物件
let maxwellInfoFromClass = new CPersonInfo();
//console.log(maxwellInfoFromClass);
//maxwellInfoFromClass.printInfo();
class CustomPersonInfo {
    // 建構子函式
    constructor(name = 'Maxwell', age = 20, hasPet = false) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }
    printInfo() {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Owns a pet? ${this.hasPet}
      `);
    }
}
;
// 1. 不填入參數
let customInfo1 = new CustomPersonInfo();
// console.log(customInfo1);
// customInfo1.printInfo();
// 2. 填入自訂的參數
let customInfo2 = new CustomPersonInfo('Toby', 32, true);
console.log(customInfo2);
customInfo2.printInfo();
// 填錯型別
// let wrongCustomInfo = new CustomPersonInfo('Toby', '32', true);
// let correctCustomInfo = new CustomPersonInfo('Leo', 28, false);
// 呼叫不存在的屬性
// correctCustomInfo.inexistedProps;
// 呼叫不存在的方法
// correctCustomInfo.inexistedMethod();
//#endregion Day18

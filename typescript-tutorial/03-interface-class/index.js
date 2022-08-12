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
// 實踐ICashMachine介面
class CashMachine {
    constructor() {
        //假設我們這些使用者
        this.users = [
            { account: 'Maxwell', password: '123', money: 12345 },
            { account: 'Martin', password: '456', money: 54321 },
            { account: 'Chairman Guo.', password: '789', money: 1000000000 },
        ];
    }
    signIn(account, password) {
        // 因為 Array.prototype.find 是 ES6 語法，暫時先用 ES5 的方式處理
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (user.account === account &&
                user.password === password) {
                this.currentUser = user;
                break;
            }
            if (this.currentUser === undefined) {
                throw new Error("User not foune");
            }
        }
    }
    signOut() {
        // 清除目前的使用者
        this.currentUser = undefined;
    }
    deposit(amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money += amount;
        }
        else {
            throw new Error('No user signed in!');
        }
    }
    withdraw(amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= amount;
        }
        else {
            throw new Error('No user signed in!');
        }
    }
}
;
function printAccountInfo(input) {
    if (input === undefined) {
        console.log('No user found!');
    }
    else {
        console.log(`
        Current User: ${input.account}
        Money: ${input.money}
      `);
    }
}
// 初始化新的提款機
const machine = new CashMachine();
console.log('Initialized: ');
printAccountInfo(machine.currentUser); //<-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！
// 登入過後
machine.signIn('Maxwell', '123');
console.log('Signed In: ');
printAccountInfo(machine.currentUser); // <-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！
// 提款 5000 過後
machine.withdraw(5000);
console.log('After Withdrawal: ');
printAccountInfo(machine.currentUser); // <-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！
// 登出過後
machine.signOut();
console.log('Signed Out: ');
printAccountInfo(machine.currentUser); //<-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！
//#endregion Day19

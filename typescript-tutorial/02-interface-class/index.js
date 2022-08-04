"use strict";
// index.ts
console.log("02-interface-class");
// 列舉組合化名
var WeekDayEnum;
(function (WeekDayEnum) {
    WeekDayEnum[WeekDayEnum["Sun"] = 0] = "Sun";
    WeekDayEnum[WeekDayEnum["Mon"] = 1] = "Mon";
    WeekDayEnum[WeekDayEnum["Tue"] = 2] = "Tue";
    WeekDayEnum[WeekDayEnum["Wed"] = 3] = "Wed";
    WeekDayEnum[WeekDayEnum["Thu"] = 4] = "Thu";
    WeekDayEnum[WeekDayEnum["Fri"] = 5] = "Fri";
    WeekDayEnum[WeekDayEnum["Sat"] = 6] = "Sat";
})(WeekDayEnum || (WeekDayEnum = {}));
;
/* 介面 (Interface) 的表現形式 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
;
// 使用介面
const maxwell = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};
//少一鍵會被認為錯誤 => 被 TS 警告！
//   const martin: Person = {
//     name: 'Martin',
//     hasPet: true,
//   };
// 多一鍵也會被認為錯誤 => 被 TS 警告！
//   const leo: Person = {
//     name: 'Leo',
//     age: 28,
//     hasPet: false,
//     job: 'DevOps',
//   };
// 屬性對應型別錯誤 => 被 TS 警告！
//   const toby: Person = {
//     name: 'Toby',
//     age: 34,
//     hasPet: 'Crocodile'
//   };
/* 檢測物件被推論結果作為函式的參數的狀況 */
// 這ㄧ次函式使用的是 interface 而不是 type alias
function printPersonInfo(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age is: ${person.age}`);
    console.log(`Owns a pet? ${person.hasPet}`);
}
//情形一：直接代入狹義物件的明文格式 => 會出現警告！
//   printPersonInfo({
//     name: 'Maxwell',
//     age: 20,
//     hasPet: false,
//     job: 'Front-End',
//     nothingSpecial: null,
//   });
// 情形二：物件形式存入參數，型別推論過後的結果，將
// 變數作為函式的參數代入
let infoMaxwell = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
    job: 'Front-End',
    nothingSpecial: null,
};
/* 使用擴展過後的 Interface */
// 正常使用方法
let accountMaxwell = {
    email: 'max@example.com',
    password: '<hashed-password>',
    subscribed: false,
    nickname: 'Maxwell',
    gender: Gender.Male,
    // birth 可以被省略是因為，該屬性為選用屬性 Optional Property
};
function pokeTheDuck(something) {
    something.makeNoise();
}
let maxwellCanBeDuck = {
    name: 'Maxwell',
    age: 20,
    noise: 'He~He~He~He~He~~~',
    makeNoise() { console.log(this.noise); },
};
let kittyCanBeDuck = {
    color: 'black and white',
    eyes: 'cute',
    noise: 'Meow~meow~meow~meow~meowwwwwwwwwww',
    makeNoise() { console.log(this.noise); },
};
let vehicleCanBeDuck = {
    brand: 'BMW',
    type: 'motorcycle',
    noise: 'Vroom! Vroom! Vroooooooooooom!',
    makeNoise() { console.log('Vrooooooom!!!'); },
};
let duckIsLiterallyDuck = {
    noise: 'Quack~quack~quack~quack~quack~',
    makeNoise() { console.log('Quack!'); },
};
const implementAddition = {
    addition(p1, p2) {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2;
        }
        else if (typeof p1 === 'string' && typeof p2 === 'string') {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }
        throw new Error(`
        Parameter \`p1\` and \`p2\` should only accept both \`number\`
        type or \`string\` type.
      `);
    }
};
;
;
let myDic = {
    A: 'Key is A',
    ['B']: 'Key is B',
    1: 'Key is 1',
    [2]: 'Key is 2'
};
// console.log(myDic['A']);
// console.log(myDic.A);
// console.log(myDic['B']);
// console.log(myDic[1]);
// console.log(myDic[2]);
// Dictionary 範例
// 正常使用方式
let normalDictionary = {
    hello: 'world',
    thisFeature: 'is crazy'
};
// 空的狹義物件狀態也行
let emptyDictionary = {};
// 錯誤的使用方式
// let wrongDictionary: Dictionary = {
//   hello: 123,
//   thisFeature: true,
//   withFunction() { console.log('Wrong type!'); },
//   nestedDictionary: { hello: 123 },
// };
// StringTypedList 範例
// 正常使用方式
let stringTypedArray = {
    123: 'Hello',
    [456]: 'Hi',
};
// 空的狹義物件狀態也行
let emptyStringTypedArray = {};
// 但不可以直接變成 Array
// let stringTypedArrayLiteral: StringTypedList = [1, 2, 3];
// 但卻可以為空的 Array
let emptyStringTypedArray2 = [];
// 可以用數字進行索引
stringTypedArray[0];
stringTypedArray[1];
let sampleAccount = {
    email: 'maxwell@example.com',
    password: '<hashed-password>',
    name: 'Maxwell'
};
// 可以讀取
sampleAccount.email;
function createCounter() {
    let value;
    let initializedNumber;
    // 實踐純函式的部分
    const counter = (function (startNumber) {
        initializedNumber = startNumber;
        value = startNumber;
    });
    // 實踐狹義物件格式的部分
    counter.increment = function () {
        value++;
        return value;
    };
    counter.reset = function () {
        value = initializedNumber;
    };
    Object.defineProperty(counter, 'value', {
        get() { return value; }
    });
    return counter;
}
// 建立一個 counter 物件
const counter = createCounter();
// 藉由 Counter 介面裡面中，純函式型別裡的格式：
// (start: number): void
// 我們可以填入數字
counter(5); // <- 初始化值為 5
// 呼叫 Counter 介面裡的 value 屬性
//console.log(counter.value); // 應該要得出 5
// 呼叫 3 次 Counter 介面裡的 increment 方法
counter.increment();
counter.increment();
counter.increment();
// 再呼叫一次 Counter 介面裡的 value 屬性
//console.log(counter.value); // 應該要得出 8
// 呼叫 Counter 介面裡的 reset 方法
counter.reset();
function logPersonInfo(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Owns a pet? ${person.hasPet}`);
}
let maxwellInfo = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
    email: 'maxwell@example.com',
    ownsMotorcycle: false,
};
logPersonInfo(maxwellInfo);
//#endregion Day16

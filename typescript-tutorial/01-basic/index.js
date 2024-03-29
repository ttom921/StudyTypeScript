// index.ts
//#region Day02
var myName = 'ttom';
var ang = 20;
var hasPet = false;
var nothing = undefined;
var nothingLiterally = null;
// myName=null;
// age=true;
// hasPet="Dog";
// nothing="something";
// nothingLiterally="thisa";
var messageToSend;
messageToSend = "cat is afraid of...";
messageToSend = 101010101001010;
// let absoluteNothing: undefined = undefined;
// let literallyAbsoluteNothing: null = null;
// absoluteNothing=123;
// literallyAbsoluteNothing="i can't live in";
// let canBeNullableString:string;
// canBeNullableString='hello';
// canBeNullableString=undefined;
// canBeNullableString=null;
var absolutelyEitherNullOrString;
absolutelyEitherNullOrString = 'assigned with string...';
absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = "assigned with string,again";
//#endregion Day02
//#region Day03
var info = {
    name: 'ttom',
    age: 20,
    hasPet: false
};
var someone = {
    knows: undefined,
    identity: null
};
//第一情況：屬性值被錯誤的型別插入干擾
//先確認屬性是否能代入值，其值對正確的型別
// info.name = 'martin';
// info.age = 24;
// info.hasPet = true;
// someone.knows = undefined;
// someone.identity = null;
//確認屬性被錯誤型別的值干擾
// info.name = false;
// info.age = null;
// info.hasPet = "Doggie with Mustache!";
// someone.knows = 'Nothing';
// someone.identity = 'Jone Snow';
//第二情況：物件分別被正確或者是錯號的物件格式整體複寫
//格式正確
// info ={
//     name:'Martin',
//     age:24,
//     hasPet:true,
// };
//格式錯諤-少一個鍵
// info = {
//     name: 'Martin',
//     age: 24,
// };
//格式錯誤-多一個鍵
// someone = {
//     knows: undefined,
//     identity: null,
//     loves: 'Ygritte'
// };
//第三情況：直接對物件新增值
//info.job='Engineer';
//物件包物件
// let obj1 = {
//     hello: 'World',
// };
// //物件被展開到另一個物件（須具備 ES7 Rest-Spread Operator 知識）
// let obj2 = {
//     ...obj1,
//     goodbye: 'Cruel World';
// };
// //使用 Object.assign(不要使用)
// let obj3 = {
//     hello: 'Another World'
// };
// let obj4 = Object.assign(obj3, {
//     goodbye: 'Cruel World'
// });
//object 型別註記
// let justAnObject: object = {
//     hello: 'world'
// };
// //我們認為可能正確的情況
// justAnObject.hello = 'max';
// //測試情況一： 覆寫錯諤型別的值
// justAnObject.hello = null;
// //測試情況二：完全寫錯誤格式
// justAnObject = {
//     goodbye: 'cruel world',
// };
// //測試情況三：無綠無故亂加key
// justAnObject.netProp = 123;
//#endregion Day03
//#region Day04
// let aSimpleFunction = function () {
//     console.log('Hi!');
// };
// const addition = function (num1, num2) {
//     return num1 + num2;
// };
// const addition = function (param1: any, param2: any) {
//     return param1 + param2;
// };
// let shouldBeString: string = addition(123, 456); // => 出錯！
// const aJSONString = '{"Hello": "World", "luckyNumber": 14}';
// // TS 不會鳥你的狀況
// let parsedJSON = JSON.parse(aJSONString);
// // 接受 TS 型別系統的擁抱
// let parsedJSON1 = JSON.parse(aJSONString) as { hello: string, luckyNumber: number };
// let parsedJSON2 = <{ hello: string, luckyNumber: number }>JSON.parse(aJSONString);
// let parsedJSON3: { hello: string, luckyNumber: number } = JSON.parse(aJSONString);
// 原本的 addition 型別為 (number, number) => number
// let addition = function (param1: number, param2: number) {
//     return param1 + param2;
// };
// 覆寫 addition：其型別為 (number, number) => number
// addition = function (param1: number, param2: number) {
//     return param2 + param1; // <- 交換位置而已...
// }
// 錯誤地覆寫 addition: 參數型別錯誤！其型別為 (string, string) => string -> 會被 TS 警告！
//   addition = function (param1: string, param2: string) {
//     return param1 + param2;
//   }
// 錯誤地覆寫 addition: 參數型別錯誤！其型別為 (number, number) => void -> 會被 TS 警告！
// addition = function (param1: number, param2: number) {
//     param1 + param2;
// }
// 函式主動回傳 undefined
var doesItWork1 = function doesItWork1() {
    return undefined;
};
// 函式輸出型別註記為 undefined，也回傳 undefined
var doesItWork2 = function doesItWork2() {
    return undefined;
};
// 函式輸出型別註記為 undefined，但不回傳任何東西 => 只有這個會出錯
// let doesItWork3 = function doesItWork3(): undefined {
// //Empty and returns nothing!
// }
// 函式輸出型別註記為 void，但回傳 undefined
var doesItWork4 = function doesItWork4() {
    return undefined;
};
//#endregion Day04
//#region Day05
//全部都是數字
var numbers = [1, 2, 3, 4, 5];
//全部都是字串
var strings = ['hi', 'how are you', 'goodbye'];
//對陣列裡任意值覆寫
numbers[1] = 123; //<-PASS
//numbers[3]='123'; //<-嗶嗶TS關心你
// 對陣列使用方法 TS 也會幫你檢測型別耶！酷的是還會隨機變通哦！
numbers.push(456); // <- PASS！
//numbers.push('456'); // <- 嗶嗶！TS 再度關心您！
numbers.concat([789, 987]); // <- PASS！
// numbers.concat(['789', '987']); // <- 嗶嗶！TS 知道你正在玩它！
// 對陣列全部覆寫
//（依據廣義物件完整性第一條，只要覆蓋的值型別不變，你愛怎麼蓋就怎麼蓋，用愛蓋吧！）
numbers = [666, 888, 999]; // <- PASS！
// numbers = ['三位一體！', '您被聖靈附體！'];  // <- 嗶嗶！TS 真的很想開你罰單！
// 數字和字串混合
var numbersAndStrings = [1, '2', 42, 666, 'Life is good'];
//長得一模一樣格式的物件
var objectsArray1 = [
    { message: 'Hello' },
    { message: 'Hi' },
    { message: 'Goodbye' },
];
// 某個物件就是故意䌞你基因突變
// let objectsArray2 = [
//     { message: 'Hello' },
//     { message: 'Hi', revolt: true },
//     { message: 'Goodbye' }
// ];
var objectsArray2 = [
    { message: 'Hello' },
    { message: 'Hi', revolt: undefined },
    { message: 'Goodbye', revolt: true }
];
// 沒辦法，基因突變的法實在太多種了，所以也不管，將就測一測吧
var objectsArray3 = [
    { message: 'hello' },
    { message: 10100101110110 },
    { message: 'GoodBye' }
];
var functionsArray = [
    function additon(num1, num2) { return num1 + num2; },
    function subtraction(num1, num2) { return num1 - num2; },
    function multiplication(num1, num2) { return num1 * num2; },
    function division(num1, num2) { return num1 / num2; },
];
var arraysArray = [
    [1, 2],
    ['Hello', 'World', 'AABAA，叫叫CBA，到底是ABC還是CBA，筆者忘記了'],
    [true, false, true, true, false],
];
// 超變態陷阱題 （Ooooooooowwww~~ 好變態啊~~~）
var miscellaneousArraysArray = [
    [1, 2, 3],
    ['Hello', 'World'],
    [true, false, 123, null],
    ['String', undefined],
];
var emptyArray = [];
// let canBeEitherNullOrNumbers=[1,2,4];
// //在Index為2插入Null值
// canBeEitherNullOrNumbers.splice(2,0,null);
var canBeEitherNullOrNumbers = [1, 2, 4];
canBeEitherNullOrNumbers.splice(2, 0, null);
//#endregion Day05
//#region Day06
// 因為前面已經被定義過 numbers 了，所以這邊必須得註解掉！
// let numbers = [1, 2, 3, 4, 5];
var mappedNumbers = numbers.map(function (num) { return num * 2; });
var BMWMotor = ['BMW', 'motorcycle', 'silver', new Date(2019, 2, 17)];
var JaguarOffRoad = ['Jaguar', 'off-road', 'royal-blue', new Date(2019, 1, 9)];
var ToyotaRV = ['Toyota', 'recreational', 'ivory-white', new Date(2019, 3, 15)];
// 少一個元素：錯誤！
// let v1: Vehicle = ['Honda', 'motorcycle', 'red'];
// 多一個元素：錯誤！
// let v2: Vehicle = ['Gogoro', 'scooter', 'white', new Date(2019, 4, 27), 'electrical'];
// 單純型別沒有符合：錯誤！
// let v3: Vehicle = ['Tesla', 'electric', 'sapphire', '2019-08-14'];
// 型別順序錯置：錯誤！
// let v4: Vehicle = ['Prosche', 'race', new Date(2019, 7, 21), 'carbon-black'];
// 完全對前三個同為 `string` 型別的值對調，儘管意義上錯誤，但 TS 還是不鳥你 ~
var WTFVehicle = ['taxi', 'yellow', 'Toyota', new Date(2019, 6, 12)];
//#endregion Day06
//#region Day07
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["FriDay"] = 5] = "FriDay";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
;
// 語法錯誤！
// enum WeekDay = { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
var weekDayOfBirthday = WeekDay.Monday;
//順向使用
var TGIF = WeekDay.FriDay;
console.log(TGIF);
//結果為 5
//逆向取回 Enmu 的 Key
var valueOfTGIF = WeekDay[TGIF];
console.log(valueOfTGIF);
// 結果為 Friday
//#endregion Day07
//#region Day08
var addOp = function (n1, n2) {
    return n1 + n2;
};
var subtractOp = function (n1, n2) {
    return n1 - n2;
};
var multiplyOp = function (n1, n2) {
    return n1 * n2;
};
var divideOp = function (n1, n2) {
    return n1 / n2;
};
//正確結果！
var powerOp = function (n1, n2) {
    return Math.pow(n1, n2);
};
// 錯誤：型別錯誤！
// let wrongPowerOp1: MathOperator = function (n1: string, n2: string) {
//     return n1 ** n2;
// }
//錯誤: 函式型別之回傳型別錯誤
// let wrongPowerOp2: MathOperator = function (n1: number, n2: number) {
//     return (n1 ** n2).toString();
// }
// 變數被型別化名註記過後，Implicit 'any' 被化解
var powerOpWithNoParamsAnnotation = function (n1, n2) {
    return Math.pow(n1, n2);
};
var infoAboutMaxwell = {
    name: 'Maxwell',
    age: 20,
    hasPet: false
};
// 隨便新增屬性會出錯！
//infoAboutMaxwell.newInfo="Gradusted from NTUST";
// 全面覆寫，格式正確就放心！
infoAboutMaxwell = {
    name: 'Alexius',
    age: 18,
    hasPet: true
};
// 全面覆寫，格式錯誤就傷心！
// infoAboutMaxwell = {
//     firstName: 'Maxwell',
//     graduated: true,
//     age: 20,
//     hasPet: false,
// };
function printInfo(info) {
    console.log("Name: ".concat(info.name));
    console.log("Age: ".concat(info.age));
    console.log("Has Pet? ".concat(info.hasPet));
}
// 物件的形式沒有被積極註記為 PersonalInfo，直接
// 將值暴力帶入函式作為參數 => 驗證錯誤！
// printInfo({
//     name: 'Martin',
//     age: 28,
//     hasPet: true,
//     hello: 'world',
//     nothingSpecial: null,
// });
// 物件的形式存入變數，其中該變數沒有被積極註記為
// PersonInfo，該變數卻被代入函式作為參數 => 竟然通過！？
var infoAboutMartin = {
    name: 'Martin',
    age: 28,
    hasPet: true,
    hello: 'world',
    nothingSpecial: null
};
printInfo(infoAboutMartin);
//#endregion Day09

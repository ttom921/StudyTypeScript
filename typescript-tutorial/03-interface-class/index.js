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
//console.log('Initialized: ');
//printAccountInfo(machine.currentUser); //<-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！
// 登入過後
machine.signIn('Maxwell', '123');
//console.log('Signed In: ');
//printAccountInfo(machine.currentUser);// <-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！
// 提款 5000 過後
machine.withdraw(5000);
//console.log('After Withdrawal: ');
//printAccountInfo(machine.currentUser);// <-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！
// 登出過後
machine.signOut();
//console.log('Signed Out: ');
//printAccountInfo(machine.currentUser); //<-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！
//#endregion Day19
//#region Day20
/* 陽春的交通票務系統 */
// 使用列舉定義我們的車票種類
var TransportTicketType;
(function (TransportTicketType) {
    TransportTicketType[TransportTicketType["Train"] = 0] = "Train";
    TransportTicketType[TransportTicketType["MRT"] = 1] = "MRT";
    TransportTicketType[TransportTicketType["Aviation"] = 2] = "Aviation";
})(TransportTicketType || (TransportTicketType = {}));
// 定義名為交通的類別
class TicketSystem {
    constructor(type, startingPoint, destination, departureTime) {
        this.type = type;
        this.startingPoint = startingPoint;
        this.destination = destination;
        this.departureTime = departureTime;
    }
    // 計算交通的間隔時間
    deriveDuration() {
        // 因為交通方式有三種，所以我們選擇先寫死
        return [1, 0, 0];
    }
    // 計算交通的抵達時間
    deriveArrivalTime() {
        const { departureTime } = this;
        //它是 ES6 Destructuring 也就是 “解構式語法”，就是把物件的屬性拔出來變成一個變數
        //相當等於
        //const departureTime = this.departureTime;
        // 從間隔時間導出總共間隔的微秒數
        const [hours, minutes, seconds] = this.deriveDuration();
        const durationSeconds = hours * 60 * 60 + minutes * 60 + seconds;
        const durationMilliseconds = durationSeconds * 1000;
        // 導出抵達時間
        const arrivalMilliseconds = departureTime.getTime() + durationMilliseconds;
        return new Date(arrivalMilliseconds);
    }
    // 印出交通票券的詳細內容
    getTicketInfo() {
        // 根據 Day 07. 提到的列舉的反射性
        // 可以反向由值推回列舉的鍵的名稱！
        const ticketName = TransportTicketType[this.type];
        const arrivalTime = this.deriveArrivalTime();
        console.log(`
      Ticket Type: ${ticketName}
      Station:     ${this.startingPoint} - ${this.destination}
      Departure:   ${this.departureTime}
      Arrival:     ${arrivalTime}
    `);
    }
}
;
// 我們來開張火車票～
const randomTicket = new TicketSystem(
// 這是火車票！
TransportTicketType.Train, 
// 啟程地點
'Tainan', 
// 抵達終點
'Kaohsiung', 
// 啟程時間 2019/09/01 早上 9 點 00 分 00 秒
new Date(2019, 8, 1, 9, 0, 0));
class TrainTicket extends TicketSystem {
    // 子類別的建構子函式
    constructor(startingPoint, destination, departureTime) {
        // 使用 super 將初始化值傳到父類別的建構子函式裡
        super(TransportTicketType.Train, startingPoint, destination, departureTime);
        this.stops = [
            'Pingtung',
            'Kaohsiung',
            'Tainan',
            'Taichung',
            'Hsinchu',
            'Taipei',
        ];
        this.stationsDetail = [
            { name: 'Pingtung', nextStop: 'Kaohsiung', duration: [2, 30, 0] },
            { name: 'Kaohsiung', nextStop: 'Tainan', duration: [1, 45, 30] },
            { name: 'Tainan', nextStop: 'Taichung', duration: [3, 20, 0] },
            { name: 'Taichung', nextStop: 'Hsinchu', duration: [2, 30, 30] },
            { name: 'Hsinchu', nextStop: 'Taipei', duration: [1, 30, 30] },
        ];
    }
    isStopExist(stop) {
        for (let i = 0; i < this.stops.length; i += 1) {
            const existedStop = this.stops[i];
            if (existedStop === stop)
                return true;
        }
        return false;
    }
    deriveDuration() {
        // 我們必須取得啟程站與抵達站
        const { startingPoint, destination } = this;
        // 先確保車站的站點是合理的
        if (this.isStopExist(startingPoint) &&
            this.isStopExist(destination)) {
            let time = [0, 0, 0];
            let stopFound = false;
            /* 1. 開始進行站點間的運算 */
            for (let i = 0; i < this.stationsDetail.length; i += 1) {
                const detail = this.stationsDetail[i];
                // 啟程站還未找到但是名稱對應到時開始累計交通時間
                if (!stopFound && detail.name === startingPoint) {
                    stopFound = true;
                    time[0] += detail.duration[0];
                    time[1] += detail.duration[1];
                    time[2] += detail.duration[2];
                }
                // 早已找到啟程站
                else if (stopFound) {
                    // 繼續累計交通時間
                    time[0] += detail.duration[0];
                    time[1] += detail.duration[1];
                    time[2] += detail.duration[2];
                    // 然而，若下一站為終點站則跳出迴圈不再累計
                    if (detail.nextStop === destination)
                        break;
                }
            }
            /* 2. 將時間轉換成合理的格式 */
            // 每六十秒轉一分鐘
            let minutes = Math.floor(time[2] / 60);
            time[1] += minutes;
            time[2] -= minutes * 60;
            // 每六十分鐘轉一小時
            let hours = Math.floor(time[1] / 60);
            time[0] += hours;
            time[1] -= hours * 60;
            // 回傳時間的格式 TimeFormat
            return time;
        }
        // `never` 型別的例外，參見 Day 10.
        throw new Error("Wrong stop name! Please check again!");
    }
}
const trainTicket = new TrainTicket(
// 啟程自台南
'Tainan', 
// 終點到新竹
'Hsinchu', 
// 發車時間為 2019/09/01 早上 9:00
new Date(2019, 8, 1, 9, 0, 0));
//trainTicket.getTicketInfo();
/* 使用 super 的注意事項 */
// 父類別擁有三個成員變數
class TestParentClass {
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
}
// 子類別繼承父類別，並且呼叫 super 進行初始化物件的動作
class TestChildClass1 extends TestParentClass {
    constructor(p1Child, p2Child, p3Child) {
        super(p1Child, p2Child, p3Child);
    }
}
const objFromChildClass1 = new TestChildClass1(123, 'Hello', true);
//console.log(objFromChildClass1);
// 子類別繼承父類別，但是沒有實踐建構子函式
class TestChildClass2 extends TestParentClass {
}
// 請仔細查看這一行出現的錯誤訊息：
//const objFromChildClass2 = new TestChildClass2();
//#endregion Day20
//#region Day21
/* 幾何圓形類別 */
class CircleGeometry {
    // 初始化時需要的參數為半徑 radius
    constructor(radius) {
        this.radius = radius;
        this.PI = 3.14;
    }
    // 計算圓形的面積
    area() {
        return this.PI * (this.radius ** 2);
    }
    // 計算圓形的周長
    circumference() {
        return 2 * this.PI * this.radius;
    }
}
// 初始化半徑為單位 2 的圓
const myCircle = new CircleGeometry(2);
// 計算圓的面積
//console.log(myCircle.area());
//計算圓的周長
//console.log(myCircle.circumference());
/* Math 本身就是提供一系列的屬性與方法 */
// 圓周率 PI
Math.PI;
// 隨機產生介於 0 ~ 1 之間的值
Math.random();
// 計算三角函數
Math.sin(Math.PI / 2);
// 計算次方
Math.pow(2, 4);
/* 靜態成員版本的幾何圓形類別 */
class StaticCircleGeometry {
    // 計算圓形的面積
    static area(radius) {
        return StaticCircleGeometry.PI * (radius ** 2);
    }
    // 計算圓形的周長
    static circumference(radius) {
        return 2 * StaticCircleGeometry.PI * radius;
    }
    // 提供使用者一個管道來取得 PI 的值
    static getValueOfPI() {
        return StaticCircleGeometry.PI;
    }
}
StaticCircleGeometry.PI = 3.14;
// 接觸 `private` 的靜態成員會被警告！
// StaticCircleGeometry.PI;
// 但是可以藉由公用靜態方法取得資訊
StaticCircleGeometry.getValueOfPI();
/* 使用 CircleGeometry */
// 初始化半徑為單位 2 的圓
const circleObj = new CircleGeometry(2);
// 計算圓的面積
const areaFromObj = circleObj.area();
// 計算圓的周長
const circumferenceFromObj = circleObj.circumference();
/* 使用 StaticCircleGeometry */
// 計算半徑為 2 的圓之面積
const areaFromStaticMethod = StaticCircleGeometry.area(2);
// 計算半徑為 2 的圓之周長
const circumferenceFromStaticMethod = StaticCircleGeometry.circumference(2);
//#endregion Day21
//#region Day22
class CircleGeometryV2 {
    // 略...
    // 初始化時需要的參數為半徑 radius
    constructor(radius) {
        this.radius = radius;
        // 使用 readonly 在成員變數上
        this.PI = 3.14;
    }
    // 使用取值方法 Getter Method
    // 裡面不能有任何參數，否則會被記警告！
    get area( /* 禁止放任意參數 */) {
        // 沒有回傳任何值也是錯誤的行為！
        return this.PI * (this.radius ** 2);
    }
    // 使用存值方法 Setter Method
    // 裡面僅僅只能有一個參數，否則會被記警告！
    set area(value /* , anotherValue: number */) {
        // 半徑是面積先除以圓周率 PI 之後再開根號
        // 開根號等效於取 0.5 次方的概念！
        this.radius = (value / this.PI) ** 0.5;
    }
    // 計算圓形的周長
    circumference() {
        return 2 * this.PI * this.radius;
    }
}
// 使用 readonly 在類別靜態屬性上
CircleGeometryV2.staticPI = 3.14;
// 初始化半徑為 2 的圓形
const randomCircle = new CircleGeometryV2(2);
// 取得圓形的面積
console.log(randomCircle.area);
// 改變半徑的值
randomCircle.radius = 3;
// 再次取得圓形面積
console.log(randomCircle.area);
// 初始化半徑為 2 的圓形
const anotherRandomCircle = new CircleGeometryV2(2);
// 取得圓形的半徑，應該等於 2
// console.log(anotherRandomCircle.radius);
// 取得圓形的面積
// console.log(anotherRandomCircle.area);
// 更改圓形的面積應該會連動到 radius 半徑的值
// 這一次我們使用半徑為 5 的圓形面積作為指派值
anotherRandomCircle.area = 3.14 * (5 ** 2);
// 半徑應該約等於 5
// console.log(anotherRandomCircle.radius);
let areaOfCircle = anotherRandomCircle.area;
/* readonly 模式 */
// 可以被讀取
anotherRandomCircle.PI;
// 但是不能被覆寫！
// anotherRandomCircle.PI = 3.1415926;
// 類別的靜態屬性被標註 readonly 也無一例外
CircleGeometryV2.staticPI;
// 因為是 readonly，所以會被 TypeScript 提醒喔
// CircleGeometryV2.staticPI = 3.1415926;
//#endregion Day22

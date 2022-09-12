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
//console.log(randomCircle.area);
// 改變半徑的值
randomCircle.radius = 3;
// 再次取得圓形面積
//console.log(randomCircle.area);
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
//#region Day23
/* 擁有私有建構子的類別範例 */
class ConstructIsForbidden {
    constructor( /* 參數 */) {
        /* 初始化物件的成員 */
    }
}
// 會被 TypeScript 叫！
//let forbiddenObject = new ConstructIsForbidden();
/* 簡單的單例模式示範 Singleton Pattern */
class SingletonPerson {
    // 該私有建構子裡面，具有某人的基本資料
    // 其中，儘管裡面的資料是開放的，但都是唯讀的狀態
    constructor(name, age, hasPet) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }
    // 定義一個公用靜態方法，負責回傳存放在此類別唯一的物件資料
    static getInstance() {
        return this.Instance;
    }
}
// 定義一個私有靜態屬性，存放此類別建構的物件資料
SingletonPerson.Instance = new SingletonPerson('Maxwell', 20, false);
// 取得單例模式的類別下建構出來的唯一物件
const uniquePerson = SingletonPerson.getInstance();
// console.log(uniquePerson);
// console.log(uniquePerson.name);
// console.log(uniquePerson.age);
// console.log(uniquePerson.hasPet);
/* 懶漢模式 */
class LazySingletonPerson {
    constructor(name, age, hasPet) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }
    static getInstance() {
        // 若是第一次呼叫，Instance 必為 null，因此進行單子的初始化
        if (this.Instance === null) {
            this.Instance = new LazySingletonPerson('Maxwell', 20, false);
        }
        return this.Instance;
    }
}
// Day 2. 就提到過的 Nullable Type
LazySingletonPerson.Instance = null;
class LazySingletonC {
    constructor( /* 成員變數或參數 */) {
        /* 物件初始化成員的過程 */
    }
    // 如果是第一次呼叫 getInstance 才會建構物件
    static getInstance() {
        if (this.Instance === null) {
            this.Instance = new LazySingletonC( /* 參數 */);
        }
        return this.Instance;
    }
}
// 將 Instance 一開始的值設定為 null
LazySingletonC.Instance = null;
//#endregion Day23
//#region Day24
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Brown"] = 2] = "Brown";
    Color[Color["Grey"] = 3] = "Grey";
    Color[Color["Rainbow"] = 4] = "Rainbow";
})(Color || (Color = {}));
;
class Horse {
    constructor(name, color, type, noise = 'MeeeeeeeEeeééeéeée~') {
        this.name = name;
        this.color = color;
        this.type = type;
        this.noise = noise;
    }
    makeNoise() {
        console.log(this.noise);
    }
    info() {
        console.log(this.infoText);
    }
    // 子類別可以覆寫 infoText 成員方法
    infoText() {
        return `It is ${this.name} the ${Color[this.color]} ${this.type}.`;
    }
}
/* 繼承類別範例 */
class Unicorn extends Horse {
    constructor(name) {
        super(name, Color.Rainbow, 'Mystical Unicorn', 
        // 獨角獸的叫聲到底是什麼，筆者也不清楚
        'Nheeeeeeheeehehé~hehé~hehé~hehé~~~');
    }
    infoText() {
        return `It's a mystical unicorn! Its name is ${this.name}!`;
    }
    // 獨角獸會吐彩虹色的嘔吐物
    puke() {
        console.log('Puking rainbow vomit!');
    }
}
// 利用生物科技製造出一隻名為 Martin 的黑色小馬
let aRandomHorsie = new Horse('Martin', Color.Black, 'Pony');
// 對馬原本就有的屬性指派錯誤型別 => TS 覺得你錯了！
// aRandomHorsie.color = 'Red';
// 對馬植入新的屬性 => 難道你沒聽到動保團體的抗議嗎？
// aRandomHorsie.isNatural = false;
// 直接覆寫錯誤的值 => 我的馬到哪裡去？
// aRandomHorsie = null;
// 要覆寫就要用同為 Horse 型別的值進行完整覆寫
// 另外：stallion 是 “騭”，馬的品種之一
aRandomHorsie = new Horse('Toby', Color.Brown, 'Stallion');
/* 類別得型別註記法 */
// 1. 用常見的型別註記法
let certainlyAHorsie = new Horse('Leo', Color.Black, 'Bronco');
// 2. 用顯性型別註記法
let certainlyAnotherHorsie = (new Horse('Wendy', Color.White, 'Mustang'));
// 3. 用 `as` 型別註記法
let certainlyTheOtherHorsie = new Horse('Alexius', Color.Grey, 'Foal');
/* 繼承後的子類別之推論機制 */
// 普通的 Unicorn
let aRandomUnicorn = new Unicorn('Maxwell');
// 註記為 Horse，不過被指派為 Unicorn
let anotherHorsie = new Unicorn('Maximilian');
// 嘔吐吧！獨角獸！
// aRandomUnicorn.puke();
// 你也跟著嘔吐吧！ => 它嘔吐不了...
// anotherHorsie.puke();
// 子類別看似代表父類別物件
// let shouldBeUnicorn: Unicorn =
//   new Horse(
//     'Maxime',
//     Color.Rainbow,
//     'Mystical Unicorn',
//     'Nyeeeeeeee~~'
//   );
// 宣告 Stallion 為 Horse 子類別，並且沒有多宣告更多成員
class Stallion extends Horse {
    constructor(name) {
        super(name, Color.Brown, 'Stallion');
    }
}
// 註記為 Stallion 型別的變數卻指派 Horse
let shouldBeStallion = new Horse('Maxwell', Color.Brown, 'Stallion');
// 定義兩種相似的類別
class C1 {
    constructor(prop) {
        this.prop = prop;
    }
    publicMethod() {
        return this.prop;
    }
}
class C2 {
    constructor(prop) {
        this.prop = prop;
    }
    publicMethod() {
        return this.prop;
    }
}
let someObject = new C2('Hello');
// 定義兩種相似的類別，但是有 private 模式
class AnotherC1 {
    constructor(prop, privateProp) {
        this.prop = prop;
        this.privateProp = privateProp;
    }
    publicMethod() {
        return this.privateMethod();
    }
    privateMethod() {
        return this.privateProp;
    }
}
class AnotherC2 {
    constructor(prop, privateProp) {
        this.prop = prop;
        this.privateProp = privateProp;
    }
    publicMethod() {
        return this.privateMethod();
    }
    privateMethod() {
        return this.privateProp;
    }
}
function logTypeA(obj) { console.log(obj); }
;
// 事實上，只要結構ㄧ樣，管你是 Type 還是 Interface
// 只要格式ㄧ樣都通過，就算參數很明確只能指定 TA 型別
// logTypeA(<TA>{ hello: 'World' });
// logTypeA(<TB>{ hello: 'World' });
// logTypeA(<IA>{ hello: 'World' });
// logTypeA(<IB>{ hello: 'World' });
//#endregion Day24
//#region Day25
// 定義角色的介面
var Role;
(function (Role) {
    Role["Swordsman"] = "Swordsman";
    Role["Warlock"] = "Warlock";
    Role["Highwayman"] = "Highwayman";
    Role["BountyHunter"] = "Bounty Hunter";
    Role["Monster"] = "Monster";
})(Role || (Role = {}));
;
// 將遊戲角色與 ICharacter 介面進行綁定 
class Character {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.health = 50;
        this.mana = 10;
        this.strength = 10;
        this.defense = 5;
    }
    attack(target) {
        let verb;
        // 根據不同的職業，進行不同的攻擊方式
        switch (this.role) {
            case Role.Swordsman:
                verb = 'attacking';
                break;
            case Role.Warlock:
                verb = 'cursing';
                break;
            case Role.Highwayman:
                verb = 'ambushing';
                break;
            case Role.BountyHunter:
                verb = 'threatening';
                break;
            default: throw new Error(`${this.role} didn't exist!`);
        }
        console.log(`${this.name} is ${verb} ${target.name}!`);
    }
}
// 分別建立兩種不同的角色
// const character1 = new Character('Maxwell', Role.Swordsman);
// const character2 = new Character('Martin', Role.Highwayman);
// 來互相傷害啊！
// character1.attack(character2);
// character2.attack(character1);
// 建立簡單的角色
let character = new Character('Maxwell', Role.Swordsman);
// 從類別建立出來的物件
let certainlyACharacter = new Character('Martin', Role.Highwayman);
// 被推論為 Character 型別的變數可以呼叫 name 屬性
character.name;
// 被推論為 Character 型別的變數可以呼叫 health 屬性
character.health;
// 被註記為 ICharacter 型別的變數可以呼叫 name 屬性
certainlyACharacter.name;
// 被註記為 ICharacter 型別的變數，由於介面 ICharacter
// 沒有 health 屬性，被 TypeScript 判定為有潛在問題
// certainlyACharacter.health;
// 新增的 Monster 類別有實踐 ICharacter 介面
class Monster {
    constructor(name) {
        this.name = name;
        this.role = Role.Monster;
    }
    attack(target) {
        console.log(`${this.name} is attacking the ${target.role} - ${target.name}`);
    }
}
// 宣告一個 Character 以及 Monster
let aHumanCharacter = new Character('Maxwell', Role.Swordsman);
let aMonster = new Monster('Sticky Slime');
// Character 創建出來的物件之 attack 方法可以接收 Monster 類別創建的物件
//aHumanCharacter.attack(aMonster);
// Monster 創建出來的物件之 attack 方法也可以接收 Character 類別創建的物件
//aMonster.attack(aHumanCharacter);
class BountyHunter extends Character {
    constructor(name) {
        super(name, Role.BountyHunter);
        // 賞金獵人會抓取人質或怪物，所以這裡會是用陣列型別
        this.hostages = [];
    }
    // 定義名為 capture - 捕捉敵人的功能
    // 第一個參數 target 是捕捉的目標
    // 第二個參數 successRate 是捕捉到目標的機率 (0 ~ 1)
    capture(target, successRate) {
        const randomNumber = Math.random();
        let message;
        let targetTitle = `${target.name} the ${target.role}`;
        // 賞金獵人成功抓取敵人必要條件是 randomNumber 必須大於 1 - successRate 的數值
        // 用機率的講法是：敵人沒辦法逃脫的機率是 1 - successRate
        // 因此，若 successRate = 1（100%），則敵人逃脫機率為 1 - successRate = 0
        // 機率真是一門很深但也是令人頭痛的學問
        if (randomNumber > (1 - successRate)) {
            // 抓到敵人時，將敵人丟到 hostages 這個陣列
            this.hostages = [...this.hostages, target];
            message = `${this.name} has captured ${targetTitle}`;
        }
        else {
            message = `${this.name} failed to capture ${targetTitle}`;
        }
        console.log(message);
    }
    // 販賣人質～
    sellHostages() {
        const totalPrice = this.hostages.length * 1000;
        const hostagesInfo = this.hostages
            .map((hostage) => `${hostage.name} the ${hostage.role}`)
            .join('\n');
        console.log(`
  ${this.name} sells all the hostages, including:
  ${hostagesInfo}
  Receive Gold: $${totalPrice}
      `);
        this.hostages = [];
    }
}
// 建立一個賞金獵人
const bountyHunter = new BountyHunter('Maxwell');
// 建立一個懸賞的普通角色
const wantedCharacter = new Character('Martin', Role.Highwayman);
// 建立一個怪物
const wantedMonster = new Monster('Eikthyrnir');
// 建立一個亡命之徒
const desperado = new Character('Legendary Joe', Role.Highwayman);
// 百分之百可以抓到普通角色
//bountyHunter.capture(wantedCharacter, 1);
// 可能可以抓到怪物
//bountyHunter.capture(wantedMonster, 0.5);
// 不太可能抓到亡命之徒
//bountyHunter.capture(desperado, 0.01);
// 賣掉人質
//bountyHunter.sellHostages();
// 普通角色是否能夠回擊呢？
//wantedCharacter.attack(bountyHunter);
// 怪物是否也能夠回擊呢？
//wantedMonster.attack(bountyHunter);
// 如果被強行註記為 ICharacter 的變數，是否能夠接受 BountyHunter 類型的值？
const anyCharacter = new BountyHunter('Alexius');
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() { return this.width * this.height; }
    circumference() { return 2 * (this.width + this.height); }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() { return Circle.PI * (this.radius ** 2); }
    circumference() { return 2 * Circle.PI * this.radius; }
}
Circle.PI = 3.14;
//建立一個視窗物件
class MyWindow {
    //設置一個參考點對Geometry 相關物件進行委任的動作
    constructor(geometry) {
        this.geometry = geometry;
    }
    //計算面積，遞給委任的物件執行
    area() {
        return this.geometry.area();
    }
    //計算周長時，遞給委任的物件執行
    circumference() {
        return this.geometry.circumference();
    }
}
//建立長方形視窗物件
let rectWindow = new MyWindow(new Rectangle(50, 100));
console.log(`Area of rectangular window:         ${rectWindow.area()}`);
console.log(`Circumference of rectangular window ${rectWindow.circumference()}`);
//建立一個圓形視窗物件
let circularWindow = new MyWindow(new Circle(10));
console.log(`Area of circular window:         ${circularWindow.area()}`);
console.log(`Circumference of circular window ${circularWindow.circumference()}`);
//#endregion Day30

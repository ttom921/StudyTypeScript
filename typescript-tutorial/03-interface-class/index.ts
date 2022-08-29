//#region Day18
interface PersonInfo {
    name: string;
    age: number;
    hasPet: boolean;
    printInfo(): void;
}

let maxwell: PersonInfo = {
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

let martin: PersonInfo = {
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

let toby: PersonInfo = {
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
    name: string = 'Maxwell';
    age: number = 20;
    hasPet: boolean = false;

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
    name: string;
    age: number;
    hasPet: boolean;

    // 建構子函式
    constructor(
        name: string = 'Maxwell',
        age: number = 20,
        hasPet: boolean = false
    ) {
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
};
// 1. 不填入參數
let customInfo1 = new CustomPersonInfo();
// console.log(customInfo1);
// customInfo1.printInfo();

// 2. 填入自訂的參數
let customInfo2 = new CustomPersonInfo('Toby', 32, true);
// console.log(customInfo2);
// customInfo2.printInfo();

// 填錯型別
// let wrongCustomInfo = new CustomPersonInfo('Toby', '32', true);

// let correctCustomInfo = new CustomPersonInfo('Leo', 28, false);

// 呼叫不存在的屬性
// correctCustomInfo.inexistedProps;

// 呼叫不存在的方法
// correctCustomInfo.inexistedMethod();


//#endregion Day18
//#region Day19
/* 提款機範例 */
// 定義每一個使用陽春的提款機的用戶的資訊
type TUserAccount = {
    account: string;
    password: string;
    money: number;
};
// // 定義陽春的提款機介面
// interface ICashMachine {
//     // 存錢錢，裡面填入要存會的量
//     deposit(amount: number): void;
//     //提領錢錢，裡面填入要提錢的量
//     withdraw(amonut: number): void;
//     // 一系列的使用帳戶
//     users: TUserAccount[];
//     // 登入的使用者，可為空代表還沒登入
//     currentUser: TUserAccount | undefined;
//     // 登入系統，必須填入帳戶與密碼
//     signIn(account: string, passwor: string): void;
//     // 登出系統
//     signOut(): void;
// }

// 定義陽春的提款機介面的帳戶管理系統
interface AccountSystem {
    // 登入系統，必須填入帳戶與密碼
    signIn(account: string, password: string): void;

    // 登出系統
    signOut(): void;
}
// 定義陽春的提款機介面的交易系統
interface TransactionSystem {
    // 存錢錢，裡面填入要存錢的量
    deposit(amount: number): void;

    // 提領錢錢，裡面填入要提錢的量
    withdraw(amount: number): void;
}

// 定義陽春的提款機介面的完整系統
interface ICashMachine extends TransactionSystem, AccountSystem { }

// 實踐ICashMachine介面
class CashMachine implements ICashMachine {
    //假設我們這些使用者
    private users: TUserAccount[] = [
        { account: 'Maxwell', password: '123', money: 12345 },
        { account: 'Martin', password: '456', money: 54321 },
        { account: 'Chairman Guo.', password: '789', money: 1000000000 },
    ];
    private currentUser: TUserAccount | undefined;

    signIn(account: string, password: string): void {
        // 因為 Array.prototype.find 是 ES6 語法，暫時先用 ES5 的方式處理
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (
                user.account === account &&
                user.password === password
            ) {
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
    deposit(amount: number) {
        if (this.currentUser !== undefined) {
            this.currentUser.money += amount;
        } else {
            throw new Error('No user signed in!');
        }
    }

    withdraw(amount: number) {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= amount;
        } else {
            throw new Error('No user signed in!');
        }
    }


};
function printAccountInfo(input: TUserAccount | undefined) {
    if (input === undefined) {
        console.log('No user found!');
    } else {
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
enum TransportTicketType {
    Train,//坐火車
    MRT,//捷運
    Aviation,//航空   
}
// 使用元組：依順序分別代表小時、分鐘與秒鐘
type TimeFormat = [number, number, number];

// 定義名為交通的類別
class TicketSystem {
    constructor(
        private type: TransportTicketType,
        protected startingPoint: string,
        protected destination: string,
        private departureTime: Date,
    ) { }
    // 計算交通的間隔時間
    protected deriveDuration(): TimeFormat {
        // 因為交通方式有三種，所以我們選擇先寫死
        return [1, 0, 0];
    }

    // 計算交通的抵達時間
    private deriveArrivalTime(): Date {
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
    public getTicketInfo() {
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
};

// 我們來開張火車票～
const randomTicket = new TicketSystem(
    // 這是火車票！
    TransportTicketType.Train,

    // 啟程地點
    'Tainan',

    // 抵達終點
    'Kaohsiung',

    // 啟程時間 2019/09/01 早上 9 點 00 分 00 秒
    new Date(2019, 8, 1, 9, 0, 0),
);
//randomTicket.getTicketInfo();

/* 使用類別繼承創造火車票券類別 */
type TrainStation = {
    name: string,
    nextStop: string,
    duration: TimeFormat,
};
class TrainTicket extends TicketSystem {
    // 子類別的建構子函式
    constructor(
        startingPoint: string,
        destination: string,
        departureTime: Date,
    ) {
        // 使用 super 將初始化值傳到父類別的建構子函式裡
        super(
            TransportTicketType.Train,
            startingPoint,
            destination,
            departureTime,
        );
    }

    private stops: string[] = [
        'Pingtung',
        'Kaohsiung',
        'Tainan',
        'Taichung',
        'Hsinchu',
        'Taipei',
    ];

    private stationsDetail: TrainStation[] = [
        { name: 'Pingtung', nextStop: 'Kaohsiung', duration: [2, 30, 0] },
        { name: 'Kaohsiung', nextStop: 'Tainan', duration: [1, 45, 30] },
        { name: 'Tainan', nextStop: 'Taichung', duration: [3, 20, 0] },
        { name: 'Taichung', nextStop: 'Hsinchu', duration: [2, 30, 30] },
        { name: 'Hsinchu', nextStop: 'Taipei', duration: [1, 30, 30] },
    ];

    private isStopExist(stop: string): boolean {
        for (let i = 0; i < this.stops.length; i += 1) {
            const existedStop = this.stops[i];
            if (existedStop === stop) return true;
        }

        return false;
    }

    protected deriveDuration(): TimeFormat {
        // 我們必須取得啟程站與抵達站
        const { startingPoint, destination } = this;

        // 先確保車站的站點是合理的
        if (
            this.isStopExist(startingPoint) &&
            this.isStopExist(destination)
        ) {
            let time: TimeFormat = [0, 0, 0];
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
                    if (detail.nextStop === destination) break;
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
    new Date(2019, 8, 1, 9, 0, 0)
);

//trainTicket.getTicketInfo();

/* 使用 super 的注意事項 */
// 父類別擁有三個成員變數
class TestParentClass {
    constructor(
        public p1: number,
        public p2: string,
        public p3: boolean,
    ) { }
}
// 子類別繼承父類別，並且呼叫 super 進行初始化物件的動作
class TestChildClass1 extends TestParentClass {
    constructor(
        p1Child: number,
        p2Child: string,
        p3Child: boolean
    ) {
        super(p1Child, p2Child, p3Child);
    }
}
const objFromChildClass1 = new TestChildClass1(123, 'Hello', true);
//console.log(objFromChildClass1);

// 子類別繼承父類別，但是沒有實踐建構子函式
class TestChildClass2 extends TestParentClass { }

// 請仔細查看這一行出現的錯誤訊息：
//const objFromChildClass2 = new TestChildClass2();


//#endregion Day20
//#region Day21
/* 幾何圓形類別 */
class CircleGeometry {
    private PI: number = 3.14;

    // 初始化時需要的參數為半徑 radius
    constructor(public radius: number) { }

    // 計算圓形的面積
    public area(): number {
        return this.PI * (this.radius ** 2);
    }

    // 計算圓形的周長
    public circumference(): number {
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
    private static PI: number = 3.14;

    // 計算圓形的面積
    static area(radius: number): number {
        return StaticCircleGeometry.PI * (radius ** 2);
    }

    // 計算圓形的周長
    static circumference(radius: number): number {
        return 2 * StaticCircleGeometry.PI * radius;
    }

    // 提供使用者一個管道來取得 PI 的值
    static getValueOfPI(): number {
        return StaticCircleGeometry.PI;
    }
}

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
    // 使用 readonly 在成員變數上
    public readonly PI: number = 3.14;

    // 使用 readonly 在類別靜態屬性上
    static readonly staticPI: number = 3.14;

    // 略...

    // 初始化時需要的參數為半徑 radius
    constructor(public radius: number) { }

    // 使用取值方法 Getter Method
    // 裡面不能有任何參數，否則會被記警告！
    get area(/* 禁止放任意參數 */) {
        // 沒有回傳任何值也是錯誤的行為！
        return this.PI * (this.radius ** 2);
    }

    // 使用存值方法 Setter Method
    // 裡面僅僅只能有一個參數，否則會被記警告！
    set area(value: number /* , anotherValue: number */) {
        // 半徑是面積先除以圓周率 PI 之後再開根號
        // 開根號等效於取 0.5 次方的概念！
        this.radius = (value / this.PI) ** 0.5;
    }

    // 計算圓形的周長
    public circumference(): number {
        return 2 * this.PI * this.radius;
    }
}

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
    private constructor(/* 參數 */) {
        /* 初始化物件的成員 */
    }
}

// 會被 TypeScript 叫！
//let forbiddenObject = new ConstructIsForbidden();

/* 簡單的單例模式示範 Singleton Pattern */
class SingletonPerson {
    // 該私有建構子裡面，具有某人的基本資料
    // 其中，儘管裡面的資料是開放的，但都是唯讀的狀態
    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly hasPet: boolean,
    ) {

    }
    // 定義一個私有靜態屬性，存放此類別建構的物件資料
    private static Instance: SingletonPerson = new SingletonPerson('Maxwell', 20, false);
    // 定義一個公用靜態方法，負責回傳存放在此類別唯一的物件資料
    static getInstance(): SingletonPerson {
        return this.Instance;
    }
}
// 取得單例模式的類別下建構出來的唯一物件
const uniquePerson = SingletonPerson.getInstance();

// console.log(uniquePerson);
// console.log(uniquePerson.name);
// console.log(uniquePerson.age);
// console.log(uniquePerson.hasPet);

/* 懶漢模式 */
class LazySingletonPerson {
    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly hasPet: boolean,
    ) { }

    // Day 2. 就提到過的 Nullable Type
    private static Instance: LazySingletonPerson | null = null;
    static getInstance(): LazySingletonPerson {
        // 若是第一次呼叫，Instance 必為 null，因此進行單子的初始化
        if (this.Instance === null) {
            this.Instance = new LazySingletonPerson('Maxwell', 20, false);
        }

        return this.Instance;
    }
}
class LazySingletonC {
    private constructor(/* 成員變數或參數 */) {
        /* 物件初始化成員的過程 */
    }

    // 將 Instance 一開始的值設定為 null
    private static Instance: LazySingletonC | null = null;

    // 如果是第一次呼叫 getInstance 才會建構物件
    static getInstance(): LazySingletonC {
        if (this.Instance === null) {
            this.Instance = new LazySingletonC(/* 參數 */);
        }

        return this.Instance;
    }
}
//#endregion Day23
//#region Day24
enum Color { White, Black, Brown, Grey, Rainbow };

class Horse {
    constructor(
        public name: string,
        public color: Color,
        public readonly type: string,
        private noise: string = 'MeeeeeeeEeeééeéeée~',
    ) { }

    public makeNoise() {
        console.log(this.noise);
    }

    public info() {
        console.log(this.infoText);
    }

    // 子類別可以覆寫 infoText 成員方法
    protected infoText(): string {
        return `It is ${this.name} the ${Color[this.color]} ${this.type}.`;
    }
}

/* 繼承類別範例 */
class Unicorn extends Horse {
    constructor(name: string) {
        super(
            name,
            Color.Rainbow,
            'Mystical Unicorn',

            // 獨角獸的叫聲到底是什麼，筆者也不清楚
            'Nheeeeeeheeehehé~hehé~hehé~hehé~~~',
        );
    }

    protected infoText(): string {
        return `It's a mystical unicorn! Its name is ${this.name}!`;
    }

    // 獨角獸會吐彩虹色的嘔吐物
    public puke(): void {
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
let certainlyAHorsie: Horse =
    new Horse('Leo', Color.Black, 'Bronco');

// 2. 用顯性型別註記法
let certainlyAnotherHorsie =
    <Horse>(new Horse('Wendy', Color.White, 'Mustang'));

// 3. 用 `as` 型別註記法
let certainlyTheOtherHorsie =
    new Horse('Alexius', Color.Grey, 'Foal') as Horse;

/* 繼承後的子類別之推論機制 */
// 普通的 Unicorn
let aRandomUnicorn = new Unicorn('Maxwell');

// 註記為 Horse，不過被指派為 Unicorn
let anotherHorsie: Horse = new Unicorn('Maximilian');

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
    constructor(name: string) {
        super(
            name,
            Color.Brown,
            'Stallion',
        );
    }
}

// 註記為 Stallion 型別的變數卻指派 Horse
let shouldBeStallion: Stallion =
    new Horse(
        'Maxwell',
        Color.Brown,
        'Stallion',
    );

// 定義兩種相似的類別
class C1 {
    constructor(public prop: string) { }

    public publicMethod(): string {
        return this.prop;
    }
}

class C2 {
    constructor(public prop: string) { }

    public publicMethod(): string {
        return this.prop;
    }
}

let someObject: C1 = new C2('Hello');

// 定義兩種相似的類別，但是有 private 模式
class AnotherC1 {
    constructor(
        public prop: string,
        private privateProp: number,
    ) { }

    public publicMethod(): number {
        return this.privateMethod();
    }

    private privateMethod(): number {
        return this.privateProp;
    }
}

class AnotherC2 {
    constructor(
        public prop: string,
        private privateProp: number,
    ) { }

    public publicMethod(): number {
        return this.privateMethod();
    }

    private privateMethod(): number {
        return this.privateProp;
    }
}

// let anotherObject: AnotherC1 = new AnotherC2('Hello', 42);


type TA = { hello: string };
type TB = { hello: string };

interface IA {
    hello: string;
}

interface IB {
    hello: string;
}

function logTypeA(obj: TA) { console.log(obj); };

// 事實上，只要結構ㄧ樣，管你是 Type 還是 Interface
// 只要格式ㄧ樣都通過，就算參數很明確只能指定 TA 型別
// logTypeA(<TA>{ hello: 'World' });
// logTypeA(<TB>{ hello: 'World' });
// logTypeA(<IA>{ hello: 'World' });
// logTypeA(<IB>{ hello: 'World' });

//#endregion Day24

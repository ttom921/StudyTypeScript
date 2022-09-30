//#region Day 42
/**泛用型別Generic Types */

// 宣告名為Identity 的化名；其中裡面有一個參數化的型別 T
type Identity<T> = T;
let shouldBeNumber: Identity<number>;

/**泛用型別化名的各種形式 */
//宣告一個泛用的Dictionary型別化名
type Dictionary<T> = {
    [prop: string]: T
};

//宣告一個泛用的LinkedList和LinkedListNode介面
// interface LinkedList<T> {
//     head: LinkedListNode<T> | null;
//     length: number;
//     at(index: number): LinkedListNode<T> | null;
// };
// interface LinkedListNode<T> {
//     value: T;
//     next: LinkedListNode<T> | null;
// }
// 宣告一個泛用的 TypedArray類別
class TypedArray<T>{
    constructor(public values: T[]) { }
}

/*使用Dictionary<T>*/
//正確使用Dictionary<T>
let correctDict: Dictionary<boolean> = {
    wentToClub: true,        //有沒有上個夜站？
    playedMahjong: true,     //有沒有打過麻將？
    isEvadingMayor: true,    //是不是落跑市長？
    hasPoliticalAcheivement: false,//有沒有政績？
};

// //Dictionary<boolean> 會被警告的部分，如果值非boolean型別
// let wrongDict: Dictionary<boolean> = {
//     koreaIsFun: true,            //旅遊韓國愉快？
//     whyIsKoreaFun: 'No mayor evaded', //為何旅遊韓國愉快？
// };

//1. 函式型別的泛用型式
type operator<T> = (p1: T, p2: T) => T;
//addition 被註記為operator<number>
//代表必須符合(p1:number,p2:number):number 型別
let addition: operator<number> =
    function (p1: number, p2: number): number {
        return p1 + p2;
    };

//stringConcatenation被駐記為operator<string>
//代表必須符合(p1:string,p2:string):string 型別
let stringConcatenaton: operator<string> =
    function (p1: string, p2: string): string {
        return p1 + p2;
    };

//2.函式本身是泛用的型式
function identityFunc<T>(something: T) {
    return something;
}

/**多重泛用參數的形式 */
//TypeConversion 型別化名為將某輸入轉探成不同的輸出型別
//但必須根據 T 與 U 的型別參數指定到的型別進行轉換
type TypeConversion<T, U> = (input: T) => U;

//檢測數字是否為正數
let isPositive: TypeConversion<number, boolean> =
    function (input: number) {
        return input > 0;
    };
//將任何東西變成'string'型別的值
let anythningToString: TypeConversion<any, string> =
    function (input: any) {
        return input.toString();
    };

/**內建泛用型別 Built-in Generics */
// 等效於具有型別的陣列
type MyArray<T> = T[];

//使用TypeScript陣列型別方式表示陣列
let numericArray: number[] = [1, 2, 3];

//number[] 等效於Array<number>
let anotherNumericArray: Array<number> = numericArray;

//使用 TypeScript泛用型別方式表示陣列
let stringArray: Array<string> = ['Hello', 'World'];

//Array<string> 等效於 string[]
let anotherStringArray: string[] = stringArray;

/**條件型別的應用 Conditional Types */
// 應用部分官方是稱作Utilty Type- 以下以Required為例子
// interface PersonalInfo {
//     name: string;
//     age?: number;
//     hasPet?: boolean;
// }
// //至少有name但不一定需要 age 或 hasPet
// let validPersonalInfo: PersonalInfo = {
//     name: 'Maxwell',
//     hasPet: false,
// };
//多了不相關的一鍵就會被TypeScript譙
// let wrongPersonalInfo: PersonalInfo = {
//     name: 'Maxwell',
//     age: 20,
//     hasMotoCycle: true,
// };

//但被冠上Require條件型別後0TypeScript就會
// 嚴格要求age與hasPet必須存在
// let incompletePersonalInfo: Required<PersonalInfo> = {
//     name: 'MaxWell',
//     age: 20,
// };


//#endregion Day 42

//#region Day 43
/**基礎泛用型別註記 */
//泛用型別之參有被指定的情形
let numbersArr: Array<number> = [1, 2, 3];

//泛用型別之參數沒有被指定的情形
//let unsepcifiedTypeParamArr: Array = [1, 2, 3];

//宣告泛用型別
//type GT<TP1,TP2,...TPn>=(型別化名內容必須包含 TP1,TP2,... TPn);
//宣告泛用介面
//interface  GI<TP1,TP2,...TPn>{ (內容必須包含 TP1,TP2,... TPn) }
//宣告泛用類別
//class GC<TP1,TP2,...TPn>{ (內容必須包含 TP1,TP2,... TPn) }   

/**預設型別 */
type DefaultStringDictionary<T = string> = {
    [prop: string]: T
};
//預設鍵值對的值之型別為string
let stringDict: DefaultStringDictionary = {
    message: 'Hello world',
    language: 'TypeScript',
};
//覆寫鍵值對的值之型別為boolean
let booleanDict: DefaultStringDictionary<boolean> = {
    hasPet: false,
    hasMotocycle: true,
};

/**泛用化名之型別參數限制 */
//宣告Primitives為所有原始型別的union
type Primitives = number | string | boolean | null | undefined;
//宣告 PrimitiveArray 為泛用型別，但是T被限制為Primitives的範疇
type PrimitiveArray<T extends Primitives> = Array<T>;
//1. 單純原始型別陣列
let numberPrimitiveArr:
    PrimitiveArray<number> = [1, 2, 3];
let stringPrimitiveArr:
    PrimitiveArray<string> = ['Hello', 'World'];

//2.物件型別的陣列 => 非原始型別，會被TypeScript警告
// interface PersonalInfo {
//     name: string;
//     age: number;
//     hasPet: boolean;
// }
// let invalidObjectArray:
//     PrimitiveArray<PersonalInfo> = [
//         {
//             name: 'Maxwell',
//             age: 20,
//             hasPet: false,
//         },
//         {
//             name: 'Martin',
//             age: 28,
//             hasPet: true,
//         }
//     ];

interface UserInfo {
    name: string;
    ange: number;
    hasPet: boolean;
}
interface UserAccount {
    email: string;
    password: string;
    subscribed: boolean;
}

//這樣的型別限制狀態下會如何呢？
//type User<T extends UserInfo & UserAccount> = T;
//這樣的型別限制狀態下會如何呢？
type User<T extends UserInfo | UserAccount> = T;

/**使用條件型別寫法 */
type TypedPrimitiveArray<T extends Primitives> =
    T extends number ? T[] :
    T extends string ? T[] :
    T extends boolean ? T[] :
    T extends null ? T[] :
    T extends undefined ? T[] : never;
//合理的使用行為:
let onlyNumberArr:
    TypedPrimitiveArray<number> = [1, 2, 3];

let onlyStringArr:
    TypedPrimitiveArray<string> = ['Hello', 'World'];

//違反的使用行為
// let invalidPrimitiveUnionedArr:
//     TypedPrimitiveArray<number | string> = [1, '2', 3];

/**泛用函式 */
//宣告一個名為 traverseElements 的泛用函式
function traverseElements<T>(
    values: Array<T>,
    callback: (el: T, index: number) => void,
) {
    for (let i = 0; i < values.length; i++) {
        callback(values[i], i);
    }
}
//宣告一個數字陣列型別符合Array<number>
let numberArrayInput = [2, 3, 5, 7, 11];
// 一個函式負責將數字陣列裡的值
let traverseCallback = function (el: number, index: number) {
    console.log(`Index ${index} - Value ${el}`);
}
//使用 traverseElements<number>
// traverseElements<number>(
//     numberArrayInput,
//     traverseCallback,
// );
// //合併簡化結果
// traverseElements<number>(
//     [2, 3, 5, 7, 11] as Array<number>,
//     function (el: number, index: number) {
//         console.log(`Index ${index} - Value ${el}`)
//     }
// );
// //最終簡化結果
// traverseElements<number>(
//     [2, 3, 5, 7, 11],
//     function (el, index) {
//         console.log(`Index ${index} - Value ${el}`)
//     }
// );
//#endregion Day 43

//#region Day 44

/**一般宣告鏈結串列的介面 */
// interface LinkedListNode {
//     value: any;
//     next: LinkedListNode | null;
// }
// interface LinkedList {
//     head: LinkedListNode | null;
//     length(): number;
//     at(index: number): LinkedListNode;
//     insert(index: number, value: any): void;
//     remove(index: number): void;
// }
/**使用泛參數方式宣告泛用介面*/
interface LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
}
interface LinkedList<U> {
    head: LinkedListNode<U> | null;
    length(): number;
    at(index: number): LinkedListNode<U> | null;
    insert(index: number, value: U): void;
    remove(index: number): void;
}

/**泛用類別宣告 */
class C<T>{
    //宣告一個成員變數，其型別為型別參數 T
    constructor(public memberProp: T) { }

    //宣告一個成員方法 memberFunc 主要是回傳 memberProp的值
    public memberFunc() { return this.memberProp; }

    //宣告一個取值方法 Getter，輸出為 memberProp
    get value() { return this.memberProp; }

    //宣告一個存儲存方法 Setter，修改 memberProp的值
    set value(input: T) { this.memberProp = input; }
}

/**情形 1.
 * 不註記在變數上，逼立物件時顯示填入
 * 型別參數，以下為 `number` 的範例
 */

let instanceofC1 = new C<number>(164);
//呼叫成員變數
instanceofC1.memberProp;
//呼叫成員方法
instanceofC1.memberFunc();
//呼叫 Getter 取值方法
instanceofC1.value;
//呼叫 Setter 存值方法
instanceofC1.value = 416;
/**情形2 
 * 註記在變數上，建立物件時不註記在類別化名旁的
 * 型別參數，以下為 `number` 的範例
*/
let instanceofC2: C<number> = new C(614);
//呼叫成員變數
instanceofC2.memberProp;
//呼叫成員方法
instanceofC2.memberFunc();
//呼叫 Getter 取值方法
instanceofC2.value;
// 呼甘 Setter 存值方法
instanceofC2.value = 416;

/**情形3
 * 不註記在變數上，建立物件時也不註記在類別化名旁的
 * 型別參數，但仍然可以推論型別參數 `number` 的範例
 */
let instanceOfC3 = new C(614);
//呼叫成員變數
instanceOfC3.memberProp;
//呼叫成員方法
instanceOfC3.memberFunc();
//呼叫 Getter 取值方法
instanceOfC3.value;
// 呼甘 Setter 存值方法
instanceOfC3.value = 416;

/**子類別繼承父類別，且父類別為泛用類別的狀況 */
// D 繼承C<T>
//class D extends C<T>{}

//E<T> 繼承 C<T>
class E<T> extends C<T>{ }

//宣告某一個類別具有兩個型別參數
class Cparent<T, U>{
    constructor(
        public member1: T,
        public member2: U,
    ) { }
}

//試問以下的狀況會出現什麼樣的情形
class Cchild1<T, U> extends Cparent<T, U>{ }
class Cchild2<T, U = T> extends Cparent<T, U>{ }
class Cchild3<T, U extends T> extends Cparent<T, U>{ }

//#endregion Day 44

//#region Day 45
/**類別綁定介面，且介面為泛用介面的狀況 */
// MyLinkedList 為普通類別，綁定 LinkedList<T>
// class MyLinkedList implements LinkedList<T>{ }

// // MyGenericLonkedList 為泛用類別，綁定 LinkedList<T>
// class MyGenericLonkedList<T> implements LinkedList<T>{ }

//實踐 LinkedListNode<T> 介面

class GenericLinkedListNode<T> implements LinkedListNode<T>{
    public next: LinkedListNode<T> | null = null;
    constructor(public value: T) { }
}

//實踐 LinkedList<T> 介面
class GenericLinkedList<T> implements LinkedList<T>{
    public head: LinkedListNode<T> | null = null;
    public length() {
        // 如果連 head Node 都為 null就代表沒有長度
        if (this.head === null) return 0;

        let count = 0;
        let currentNode: LinkedListNode<T> | null = this.head;
        //使用while-loop 進行計算 LinkedList 長度的迭代
        while (currentNode !== null) {
            currentNode = currentNode.next;
            count++;
        }
        return count;
    }
    public at(index: number): LinkedListNode<T> | null {
        const length = this.length();

        //如果長度小於 index 則無條件視為 out of bound.
        // 直托丟出 Error
        //
        // index 由 0 開始計算，跟陣列的概念一模一樣
        // 如：
        // - 長度為 0 的鏈結串列，index 為 0 必須丟出 error
        // - 長度為 3 的鏈結串列，index 為2 是最後一個值
        //   但 3 以上則必須丟出 error
        if (index >= length) throw new Error('Index out of bound');

        // 以下取得實際的 LinkedListNode 值
        let currentIndex = 0;
        let currentNode = this.head as LinkedListNode<T>;
        while (currentIndex !== index) {
            currentNode = currentNode.next as LinkedListNode<T>;
            currentIndex++;
        }
        return currentNode;
    }
    public insert(index: number, value: T): void {
        const length = this.length();
        const newNode = new GenericLinkedListNode(value);

        //如果長度小於 index 值就選擇私出 'Out of bound' Error
        if (length < index) throw new Error('Index out of bound');

        // 但是若剛好等於 index 值，代表要插入新的節點
        else if (length == index) {
            if (index === 0) {
                this.head = newNode;
            } else {
                const node = this.at(index - 1) as LinkedListNode<T>;
                node.next = newNode;
            }
        }
        //長度大於 index 值，就代從中插入新的 LinkedListNode
        else {
            if (index === 0) {
                const origialHead = this.head;
                this.head = newNode;
                this.head.next = origialHead;
            } else {
                const prevNode = this.at(index - 1) as LinkedListNode<T>;
                const originalNode = prevNode.next as LinkedListNode<T>;
                prevNode.next = newNode;
                newNode.next = originalNode;
            }
        }
    }
    public remove(index: number): void {
        if (index > this.length()) throw new Error('Index out of bound');
        if (index < 0) throw new Error('Index out of bound');
        else if (index == 0) {
            const origialHead = this.head;
            //長度剛好是一個節點
            if (this.length() == 1) {
                if (this.head !== null)
                    this.head.next = null
                this.head = null;
            } else {
                //將 head 的下一個變成 head
                const nextNode = origialHead?.next as LinkedListNode<T>;
                this.head = nextNode;
                this.head.next = nextNode.next;
            }
        } else {
            const prevNode = this.at(index - 1) as LinkedListNode<T>;
            //剛好最後一個
            if (this.length() == index + 1) {
                prevNode.next = null;
            } else {
                const currentNode = this.at(index) as LinkedListNode<T>;
                prevNode.next = currentNode.next;
            }
        }
    }
    public getInfo() {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode != null) {
            console.log(`Index ${currentIndex}: ${currentNode.value}`);
            currentNode = currentNode.next;
            currentIndex++;
        }
    }
}

// 宣告一個新的鏈結串列，型別參數的值為 number
const l = new GenericLinkedList<number>();

//插入 123 在index =0 的位置，此時錄結串列為：
// [123]
l.insert(0, 123);
//插入 456 在index =1 的位置，此時錄結串列為：
// [123]  -> [456]
l.insert(1, 456);
//插入 789 在index =2 的位置，此時錄結串列為：
// [123]  -> [456] -> [789]
l.insert(2, 789);

//插入 12321 在index =1 的位置，此時錄結串列為：
// [123]  -> [12321] -> [456] -> [789]
l.insert(1, 12321);
//檢視結果
l.getInfo();
//
//檢視鏈結串列中 index =0 ~ 3 的元素之值：
// 由於我們鄗定 l.at(index) where index = 0 ~3
// 100% 絕對是 LinkedListNode<number> ，而非 null
// 因此採取顯示註記的動作
console.log((l.at(0) as LinkedListNode<number>).value);
console.log((l.at(1) as LinkedListNode<number>).value);
console.log((l.at(2) as LinkedListNode<number>).value);
console.log((l.at(3) as LinkedListNode<number>).value);

// 如果超出範圍應該會直彈出錯誤訊息，這裡用try...catch...
// try {
//     l.at(4)
// } catch (error) {
//     console.log('Out of bound error caugh ', error);
// }
// [123]  -> [12321] -> [456] -> [789]
// l.remove(0);
// l.remove(0);
// l.remove(0);
// l.remove(0);
// l.getInfo();
l.remove(1);
l.getInfo();


//#endregion Day 45

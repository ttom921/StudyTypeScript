//#region Day 46
/* 使用泛用參數的方式宣告泛用介面 */
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
// 實踐 LinkedListNode<T> 介面
class GenericLinkedListNode<T> implements LinkedListNode<T> {
    public next: LinkedListNode<T> | null = null;

    constructor(public value: T) { }
}

// 實踐 LinkedList<T> 介面
class GenericLinkedList<T> implements LinkedList<T> {
    public head: LinkedListNode<T> | null = null;

    public length() {
        // 如果連 head Node 都為 null 就代表沒有長度
        if (this.head === null) return 0;

        let count = 0;
        let currentNode: LinkedListNode<T> | null = this.head;

        // 使用 while-loop 進行計算 LinkedList 長度的迭代
        while (currentNode !== null) {
            currentNode = currentNode.next;
            count++;
        }
        return count;
    }

    public at(index: number): LinkedListNode<T> | null {
        const length = this.length();

        // 如果長度小於 index 則無條件視為 out of bound，
        // 直接丟出 Error
        //
        // index 由 0 開始計算，跟陣列的概念一模一樣
        // 如：
        // - 長度為 0 的鏈結串列，index 為 0 必須丟出 error
        // - 長度為 3 的鏈結串列，index 為 2 是最後一個值，
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

    public insert(index: number, value: T) {
        const length = this.length();
        const newNode = new GenericLinkedListNode(value);

        // 如果長度小於 index 值就選擇丟出 'Out of bound' Error
        if (length < index) throw new Error('Index out of bound');

        // 但是若剛好等於 index 值，代表要插入新的節點
        else if (length === index) {
            if (index === 0) {
                this.head = newNode;
            } else {
                const node = this.at(index - 1) as LinkedListNode<T>;
                node.next = newNode;
            }
        }

        // 長度大於 index 值，就代表從中插入新的 LinkedListNode
        else {
            if (index === 0) {
                const originalHead = this.head;
                this.head = newNode;
                this.head.next = originalHead;
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

        while (currentNode !== null) {
            console.log(`Index ${currentIndex}: ${currentNode.value}`);
            currentNode = currentNode.next;
            currentIndex++;
        }
    }
}
//--------------------
interface SIterator<T> {
    // 事實上原著還有多一個 first 方法代表取得聚合物的第一個值，不過
    // 筆者認為本篇沒有需求，因此選擇不設定為 Iterator<T> 的規格
    // first(): T | null;

    // next 方法為巡訪下一個元素，輸出為 void 的理由則是因為，如果想要
    // 讀取該迭代器的內容，你必須使用 currentItem 這個屬性
    next(): void;

    // 確認迭代器是否到終點
    isDone(): boolean;

    // 迭代器目前迭代到的值，也可能為 null 也說不定
    currentItem: T | null;
}
interface FactoryIterable<T> {
    // 為Factor Method，專門創建對應的Iterator<T>物件
    createIterator(): SIterator<T>;
}

// 建立普通的 Iterator，傳入陣列型資料並進行普通迭代
class NormalIterator<T> implements SIterator<T> {
    public currentItem: T | null = null;
    private currentIndex = 0;

    constructor(private items: Array<T>) {
        this.currentItem = items[0];
    }

    public isDone() {
        // 若 index 值超出 items 大小範圍則代表迭代結束
        return this.currentIndex > this.items.length - 1;
    }

    public next(): void {
        // 如果早就 isDone，就拋出 Out of bound 相關的錯誤訊息
        if (this.isDone()) throw new Error('Iterator out of bound.');

        // 正常迭代到下個元素
        this.currentIndex++;
        this.currentItem = this.items[this.currentIndex];

    }
}

//建立MyArray 不過跟Array本身差不多只是多實踐了
//Iterable<T>介面
class MyArray<T> implements FactoryIterable<T>{
    constructor(public items: Array<T>) { }
    //此為Factor Method , 專門建立MyArray的迭代器
    createIterator() {
        return new NormalIterator<T>(this.items);
    }
}

//建立一個簡單的聚合物
let aCollection = new MyArray<number>([1, 2, 3, 4, 5]);

//建立該聚合物的迭代器
let anIterator = aCollection.createIterator();

// 迴圈遍歷該迭代器
// while (!anIterator.isDone()) {
//     console.log(`Iterated value: ${anIterator.currentItem}`);
//     anIterator.next();
// }
// //如果硬要在呼叫 next，就會觸發 Out of bound 錯誤
// try {
//     anIterator.next();
// } catch (err) {
//     console.log('Out of bound error caught!');
// }

class IterableLinkedList<T>
    extends GenericLinkedList<T>
    implements FactoryIterable<T> {
    // 實踐建立迭代器的工廠方法
    public createIterator() {
        // 記得：空陣列是必須積極註記的案例
        const elements: Array<T> = [];

        let currentNode = this.head;
        while (currentNode !== null) {
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return new NormalIterator(elements);
    }
}
// 任何為 Iterator<T> 型別的東西都可以被遍歷
function foreach<T>(iter: SIterator<T>, callback: (v: T) => void) {
    while (!iter.isDone()) {
        callback(iter.currentItem as T);
        iter.next();
    }
}
// 建立兩種不同的聚合物
let collection1 = new MyArray([1, 2, 3]);
let collection2 = new IterableLinkedList<number>();
collection2.insert(0, 1);
collection2.insert(1, 2);
collection2.insert(2, 3);

// 建立兩種相同的迭代器來各自不同的聚合物
let iter1 = collection1.createIterator();
let iter2 = collection2.createIterator();

// 兩個迭代器儘管來源不同，但都可以動作
// foreach(iter1, v => console.log(`v from collection1: ${v}`));
// foreach(iter2, v => console.log(`v from collection2: ${v}`));

/**陽春版的 BinaryTree 與 TreeNode 的實踐 */


// TreeNode 為樹裡面的節點
class TreeNode<T>{
    public leftNode: TreeNode<T> | null = null;
    public rightNode: TreeNode<T> | null = null;
    public parent: TreeNode<T> | null = null;



    constructor(public value: T) { }

    //存值方法--存放左節點
    set left(value: T) {
        this.leftNode = new TreeNode(value);
        //順便對子節點進行父子關系的連結
        this.leftNode.parent = this;
    }
    //存值方法--存放右節點
    set right(value: T) {
        this.rightNode = new TreeNode(value);
        //順便對子節點進行父子關系的連結
        this.rightNode.parent = this;
    }
}
//BinaryTree 為主的二元樹物件
class BinaryTree<T> implements FactoryIterable<T>{
    constructor(public root: TreeNode<T>) { }
    //宣告前序走訪的成員方法
    public preorderTraversal(callback: (el: TreeNode<T>) => void) {
        this.preorderRecursive(this.root, callback);
    }
    //此為private 成員，目的是用遞迴實璛前序走訪
    private preorderRecursive(
        node: TreeNode<T>,
        callback: (el: TreeNode<T>) => void
    ) {
        callback(node);
        if (node.leftNode !== null) {
            this.preorderRecursive(node.leftNode, callback);
        } if (node.rightNode !== null) {
            this.preorderRecursive(node.rightNode, callback);
        }
    }

    //實踐 FactoryIterable<T>的介面
    public createIterator() {
        const elements: Array<T> = [];
        //使用preorderTraversla 將值者丟進陣列
        this.preorderTraversal(node => {
            elements.push(node.value);
        });
        // 建構迭代器
        return new NormalIterator(elements);
    }
}
//宣告 TN 為 TreeNode<number> 的化名
type TN = TreeNode<number>;

//建構樹的根節點外，將該節點設為二元樹的點
const root = new TreeNode(1);
const aBTree = new BinaryTree(root);

//建構樹的內部結構
root.left = 2;
(root.leftNode as TN).left = 3;
(root.leftNode as TN).right = 4;
((root.leftNode as TN).rightNode as TN).left = 5;

root.right = 6;
(root.rightNode as TN).left = 7;
((root.rightNode as TN).leftNode as TN).left = 8;
((root.rightNode as TN).leftNode as TN).right = 9;
(((root.rightNode as TN).leftNode as TN).rightNode as TN).left = 10;

// 一般使用手法
console.log('Normal Usage:');
const valueCumulation1: Array<number> = [];

aBTree.preorderTraversal(n => valueCumulation1.push(n.value));
console.log(valueCumulation1);

// 多型巡訪下的手法
console.log('Polymorphic Iteration:');
const valueCumulation2: Array<number> = [];
const aBTreeIter = aBTree.createIterator();

foreach(aBTreeIter, v => valueCumulation2.push(v));
console.log(valueCumulation2);

//#endregion Day 46
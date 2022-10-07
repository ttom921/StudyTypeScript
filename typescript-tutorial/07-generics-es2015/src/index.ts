//#region Day 47
/**使用 ES6 Map */

let typedMap = new Map<number, string>();
typedMap.set(1, 'Hello world');
//console.log(typedMap.get(1));
//console.log(typedMap.has(1));

/**使用ES6 Set */
let typedSet = new Set<number>();
typedSet.add(123);
typedSet.values();
typedSet.clear();

let unsepcifiedTypedMap1 = new Map();
let unspecifiedTypedSet1 = new Set();

let unsepcifiedTypedMap2 = new Map([[123, 'hello wrold']]);
let unspecifiedTypedSet2 = new Set([1, 2, 3, 4, 5]);

/**ES6 Promise 與泛型的機制 */
// let aPromise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         resolve('succeeded');
//     }, 3000);
// });

//const unspecifiedTypedPromise = new Promise((resolve, rejcet) => { });

// const unspecifiedTypedPromise = new Promise((resolve, rejcet) => {
//     resolve(true);
// });

// const resolvedPromise = Promise.resolve(true);
// const rejectedPromise = Promise.reject(false);

/**使用 Promise.all */
// const promiseAll = Promise.all([
//     Promise.resolve('123'),
//     new Promise<number>((resolve) => { resolve(123) }),
//     new Promise<boolean>((resolve) => { resolve(true) }),
//     Promise.reject(false),
// ]);
/**使用 Promise.race */
// function delay<T>(milliseconds: number, value: T): Promise<T> {
//     return new Promise<T>((resolve) => {
//         setTimeout(function () {
//             resolve(value);
//         }, milliseconds);
//     });
// }
// const promiseRace = Promise.race([
//     delay<string>(3000, 'Hello wrold'),
//     delay<number>(1000, 123),
//     delay<boolean>(2000, false),
// ]);
//#endregion Day 47
//#region Day 48
/**回呼函式地獄 */
//假設我們有一個很陽春的送請求的函式
function sendRequest(
    success: (result: string) => void,
    error: (result: string) => void
) {
    if (Math.random() > .9) {
        //送請求可能出現錯誤
        error('500 Server error');
        return;
    }
    const time = Math.random() * 3000;
    setTimeout(() => {
        success('200 Success');
    }, time);
}

// 我們想要達成，依序送出三種不同請求
// 且必須要等前一個請求完成才能繼續下去

// 設定三個計時器
// console.time('1st Request Received');
// console.time('2nd Request Received');
// console.time('3rd Request Received');

// // 送出第一個請求
// sendRequest(
//     function (result) {
//         //第一次請求送完時的時間
//         console.timeEnd('1st Request Received');
//         console.log(`1st attem ${result}`);
//         // 等第一個請求送完再來送第二個請求
//         sendRequest(
//             function (result) {
//                 // 第二次請求送完時的時間 
//                 console.timeEnd('2nd Request Received');
//                 console.log(`2nd attempt ${result}`);
//                 // 等第二個請求送完再來送第三個請求
//                 sendRequest(
//                     function (result) {
//                         // 第三次請求送完時的時間
//                         console.timeEnd('3rd Request Received');
//                         console.log(`3rd attempt ${result}`);
//                     },
//                     function (message) {
//                         console.log(`Error occured in 3rd attempt ${message}`);
//                     }
//                 );
//             },
//             function (message) {
//                 console.log(`Error occured in 2nd attempt ${message}`);
//             }
//         );
//     },
//     function (message) {
//         console.log(`Error occured in 1st attempt ${message}`);
//     }
// );

/**使用 Promise 物件 */
function sendRequestAsPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
        if (Math.random() > .9) {
            // 送請求可能出現錯誤
            reject('500 Server Error');
            return;
        }
        const time = Math.random() * 3000;
        setTimeout(() => {
            resolve('200 success');
        }, time);
    });
}

// 設定三個計時器
// console.time('1st Request Received');
// console.time('2nd Request Received');
// console.time('3rd Request Received');

// let attempts = 1;
// // 第一次送出 request - 為一個 Promise<string>
// sendRequestAsPromise()
//     .then(function (result) {
//         // 第一次請求送完時的時間
//         console.timeEnd('1st Request Received');
//         console.log(`1st attempt ${result}`);
//         attempts++;
//         // 送出第二次請求 - 回傳一個 Promise<string>
//         return sendRequestAsPromise();
//     })
//     .then(function (result) {
//         // 第二次請求送完時的時間
//         console.timeEnd('2nd Request Received');
//         console.log(`2nd attempt ${result}`);
//         attempts++;
//         // 送出第三次請求 - 回傳一個 Promise<string>
//         return sendRequestAsPromise();
//     }).then(function (result) {
//         // 第三次請求送完時的時間
//         console.timeEnd('3rd Request Received');
//         console.log(`3rd attempt ${result}`);

//     })
//     .catch(function (message) {
//         console.log(`Failed in the ${attempts} attempts: ${message}`);
//     });

//#endregion Day 48

//#region Day 49
/**陽春的 Generator Function */
function* numbersIteratorGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

// 從 Generator Function 建立一個迭代器
const numbersIter = numbersIteratorGenerator();

// //以下連續呼叫7次 next 方法
// console.log(numbersIter.next());
// console.log(numbersIter.next());
// console.log(numbersIter.next());
// console.log(numbersIter.next());
// console.log(numbersIter.next());
// console.log(numbersIter.next());
// console.log(numbersIter.next());


/**裡面沒有 return 表達式 */
function* generator1() {
    yield 1;
    yield 2;
    yield 3;
}

/**最後不是使用yield ,而是return表達式 */
function* generator2() {
    yield 1;
    yield 2;
    return 3;
}
// const numbersIter1 = generator1();
// console.log(numbersIter1.next());
// console.log(numbersIter1.next());
// console.log(numbersIter1.next());
// console.log(numbersIter1.next());
// console.log(numbersIter1.next());

// const numbersIter2 = generator2();
// console.log(numbersIter2.next());
// console.log(numbersIter2.next());
// console.log(numbersIter2.next());
// console.log(numbersIter2.next());
// console.log(numbersIter2.next());

function* generatorFunc() {
    console.log('Iterator created....');
    yield 1;
    yield 2;
    yield 3;
}

// // 試問呼叫 generatorFunc 時，console.log 會先動？
// console.log('Before create iterator');
// let iterator = generatorFunc();
// console.log('After create iterator');

// // 還是等到 next 被呼叫前後才會動作？
// console.log('Before invoke 1st next method');
// console.log(iterator.next());
// console.log('After invoke 1st next method');


/**費候內契數列 */
function* fibonacci() {
    let n0 = 1;
    let n1 = 1;
    while (true) {
        yield n0;
        //使用ES6 Destructure語法
        [n0, n1] = [n1, n0 + n1];
    }
}
// //試問以下會出現什麼樣的結果？
// const fbSeries = fibonacci();
// for (let i = 0; i < 10; i++) {
//     console.log(fbSeries.next(10));
// }


function* summationGenerator(defaultValue: number = 0): any {
    let total = defaultValue;

    while (true) {
        total += yield total;
    }
}

let summationIter = summationGenerator();
// console.log(summationIter.next(5));
// console.log(summationIter.next(7));
// console.log(summationIter.next(11));

function* positiveNumberIterator() {
    let number = 1;

    while (true) {
        yield number;
        number += 1;
    }
}
//#endregion Day 49
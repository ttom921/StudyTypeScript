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
let aPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('succeeded');
    }, 3000);
});

//const unspecifiedTypedPromise = new Promise((resolve, rejcet) => { });

// const unspecifiedTypedPromise = new Promise((resolve, rejcet) => {
//     resolve(true);
// });

// const resolvedPromise = Promise.resolve(true);
// const rejectedPromise = Promise.reject(false);

/**使用 Promise.all */
const promiseAll = Promise.all([
    Promise.resolve('123'),
    new Promise<number>((resolve) => { resolve(123) }),
    new Promise<boolean>((resolve) => { resolve(true) }),
    Promise.reject(false),
]);
/**使用 Promise.race */
function delay<T>(milliseconds: number, value: T): Promise<T> {
    return new Promise<T>((resolve) => {
        setTimeout(function () {
            resolve(value);
        }, milliseconds);
    });
}
const promiseRace = Promise.race([
    delay<string>(3000, 'Hello wrold'),
    delay<number>(1000, 123),
    delay<boolean>(2000, false),
]);
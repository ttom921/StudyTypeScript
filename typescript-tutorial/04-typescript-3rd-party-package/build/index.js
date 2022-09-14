"use strict";
// 取得按鈕元素
const $btn = document.getElementById('click-me-btn');
// 取得計睥的span 元素
const $counter = document.getElementById('count');
//使用 TYpe Guard
if ($btn === null || $counter === null) {
    throw new Error("Elemants shouldn\'t be null");
}
//累計按鈕次數
let count = 0;
//每一次按鈕被按到就會將計數次數上升
$btn.addEventListener('click', () => {
    count++;
    console.log("You clicked me!");
    $counter.innerText = count.toString();
});
//# sourceMappingURL=index.js.map
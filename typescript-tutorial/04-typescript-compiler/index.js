"use strict";
// // 宣當名為 a 的變數並註記成number
// let a: number;
// //指派a到b
// const b = a;
// 宣告名為summation 的函式
// function summation(p1, p2) {
//     return p1 + p2;
// }
/* 宣告名為 MyMath 的命名空間*/
var MyMath;
(function (MyMath) {
    // 圓周率
    MyMath.PI = 3.14;
    //計算圓的面積
    function AreaOfCircle(radius) {
        return MyMath.PI * radius ** 2;
    }
    MyMath.AreaOfCircle = AreaOfCircle;
    //計算長方形的面積
    function AreaOfRectangel(width, height) {
        return width * height;
    }
    MyMath.AreaOfRectangel = AreaOfRectangel;
    //計算圓的周長
    function CircumferenceOfCircle(radius) {
        return 2 * MyMath.PI * radius;
    }
    MyMath.CircumferenceOfCircle = CircumferenceOfCircle;
    // 計算長方形的周長
    function CircumferenceOfRectangel(width, height) {
        return 2 * (width + height);
    }
    MyMath.CircumferenceOfRectangel = CircumferenceOfRectangel;
})(MyMath || (MyMath = {})); //namespace MyMath
// console.log(MyMath.PI);
// console.log(MyMath.AreaOfCircle(100));
// console.log(MyMath.CircumferenceOfRectangel(50, 100));
//印出圓周率
console.log(Circle.PI);
//計算半徑為10的圓面積
console.log(Circle.area(10));
//計算半徑為20的圓周長
console.log(Circle.circumference(20));
//計算20X30長方形面積
console.log(Rectanle.area(10, 20));
//計算 50X100長方形周長
console.log(Rectanle.circumference(50, 100));

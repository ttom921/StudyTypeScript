/**引入Namespaces */
/// <reference path="./MyMath/Circle.ts" />
/// <reference path="./MyMath/Rectangle.ts" />


//印出圓周率
console.log(MyMath.Circle.PI);
//計算半徑為5的圓面積
console.log(MyMath.Circle.area(5));

//計算 20X30長方形周長
console.log(MyMath.Rectanle.circumference(20, 30));
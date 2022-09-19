// // 宣當名為 a 的變數並註記成number
// let a: number;
// //指派a到b
// const b = a;


// 宣告名為summation 的函式
// function summation(p1, p2) {
//     return p1 + p2;
// }

/* 宣告名為 MyMath 的命名空間*/
namespace MyMath {
    // 圓周率
    export const PI = 3.14;

    //計算圓的面積
    export function AreaOfCircle(radius: number) {
        return PI * radius ** 2;
    }

    //計算長方形的面積
    export function AreaOfRectangel(width: number, height: number) {
        return width * height;
    }

    //計算圓的周長
    export function CircumferenceOfCircle(radius: number) {
        return 2 * PI * radius;
    }
    // 計算長方形的周長
    export function CircumferenceOfRectangel(width: number, height: number) {
        return 2 * (width + height);
    }
}//namespace MyMath

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
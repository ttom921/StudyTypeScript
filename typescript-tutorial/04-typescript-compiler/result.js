"use strict";
// ./MyMath/Circle.ts
/**宣告名為MyMath的命名空間 */
var MyMath;
(function (MyMath) {
    /**宣告名為Circle的命名空間 */
    let Circle;
    (function (Circle) {
        Circle.PI = 3.14;
        function area(radius) {
            return Circle.PI * (radius ** 2);
        }
        Circle.area = area;
        function circumference(radius) {
            return 2 * Circle.PI * radius;
        }
        Circle.circumference = circumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
// ./MyMath/Rectangle.ts
/**宣告名為MyMath的命名空間 */
var MyMath;
(function (MyMath) {
    /**宣告名為Rectangel的命名空間 */
    let Rectanle;
    (function (Rectanle) {
        function area(width, height) {
            return width * height;
        }
        Rectanle.area = area;
        function circumference(width, height) {
            return 2 * (width + height);
        }
        Rectanle.circumference = circumference;
    })(Rectanle = MyMath.Rectanle || (MyMath.Rectanle = {}));
})(MyMath || (MyMath = {}));
/**引入Namespaces */
/// <reference path="./MyMath/Circle.ts" />
/// <reference path="./MyMath/Rectangle.ts" />
//印出圓周率
console.log(MyMath.Circle.PI);
//計算半徑為5的圓面積
console.log(MyMath.Circle.area(5));
//計算 20X30長方形周長
console.log(MyMath.Rectanle.circumference(20, 30));

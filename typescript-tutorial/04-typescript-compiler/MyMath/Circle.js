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

"use strict";
// ./Circle.ts
/**宣告名為Circle的命名空間 */
var Circle;
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
})(Circle || (Circle = {}));

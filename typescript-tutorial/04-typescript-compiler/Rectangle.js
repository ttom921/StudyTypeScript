"use strict";
// ./Rectangle.ts
/**宣告名為Rectangel的命名空間 */
var Rectanle;
(function (Rectanle) {
    function area(width, height) {
        return width * height;
    }
    Rectanle.area = area;
    function circumference(width, height) {
        return 2 * (width + height);
    }
    Rectanle.circumference = circumference;
})(Rectanle || (Rectanle = {}));

"use strict";
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

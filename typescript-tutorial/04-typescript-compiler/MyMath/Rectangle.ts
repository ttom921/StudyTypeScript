// ./MyMath/Rectangle.ts
/**宣告名為MyMath的命名空間 */
namespace MyMath {
    /**宣告名為Rectangel的命名空間 */
    export namespace Rectanle {
        export function area(width: number, height: number) {
            return width * height;
        }
        export function circumference(width: number, height: number) {
            return 2 * (width + height);
        }
    }
}

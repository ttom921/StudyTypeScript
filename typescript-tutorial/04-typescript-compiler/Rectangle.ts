// ./Rectangle.ts

/**宣告名為Rectangel的命名空間 */
namespace Rectanle {
    export function area(width: number, height: number) {
        return width * height;
    }
    export function circumference(width: number, height: number) {
        return 2 * (width + height);
    }
}
// ./Circle.ts

/**宣告名為Circle的命名空間 */
namespace Circle {
    export const PI = 3.14;
    export function area(radius: number) {
        return PI * (radius ** 2);
    }
    export function circumference(radius: number) {
        return 2 * PI * radius;
    }
}
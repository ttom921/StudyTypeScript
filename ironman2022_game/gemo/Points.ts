import * as PIXI from "pixi.js"
import { MathUtil } from './../utils/MathUtil';



PIXI.Point.prototype.toString = function (): string {
    return '' + this.x + ',' + this.y;
}
PIXI.ObservablePoint.prototype.toString = function (): string {
    return '' + this.x + ',' + this.y;
};

export class Point extends PIXI.Point {
    constructor(x?: number, y?: number) {
        super(x, y);
    }
    /**
     * Determines a point between two specified points.
     * The parameter f determines where the new interpolated point is located relative to the two end points specified by parameters pt1 and pt2.
     * The closer the value of the parameter f is to 1.0, the closer the interpolated point is to the first point (parameter pt1).
     * The closer the value of the parameter f is to 0, the closer the interpolated point is to the second point (parameter pt2).
     */
    public static interpolate(point1: PIXI.Point, point2: PIXI.Point, f: number, result?: Point): Point {
        result = result || new Point();
        let dx = point1.x - point2.x;
        let dy = point1.y - point2.y;
        result.set(point2.x + dx * f, point2.y + dy * f);
        return result;
    }

    public static distance(point1: PIXI.Point, point2: PIXI.Point): number {
        let dx: number = point1.x - point2.x;
        let dy: number = point1.y - point2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

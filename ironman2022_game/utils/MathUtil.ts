
export class MathUtil {
    private static _180_DIVIDED_BY_PI: number = 180 / Math.PI;
    private static _PI_DIVIDED_BY_180: number = Math.PI / 180;

    /**
     * Duration of a second in milliseoncds
     * @type {number}
     */
    public static getONE_SECONE(): number {
        return 1000;
    }
    /**
     * Duration of a minute in milliseoncds
     * @type {number}
     */
    public static get ONE_MINUTE(): number {
        return 60000;
    }
    /**
     * Duration of an hour in milliseoncds
     * @type {number}
     */
    public static get ONE_HOUR(): number {
        return 3600000;
    }
    /**
     * Duration of a day in milliseoncds
     * @type {number}
     */
    public static get ONE_DAY(): number {
        return 86400000;
    }
    /**
     * Duration of a week in milliseoncds
     * @type {number}
     */
    public static get ONE_WEEK(): number {
        return 604800000;
    }
    private static _HALF_PI: number = Math.PI * 0.5;
    private static _TWO_PI: number = Math.PI * 2;
    private static _QUATER_PI: number = Math.PI * 0.25;
    /**
     * Half the value of Math.PI (equivalent to 90 degrees)
     * @type {number}
     */
    public static get HALF_PI(): number {
        return MathUtil._HALF_PI;
    }
    /**
     * Double the value of Math.PI (equivalent to 360 degrees)
     * @type {number}
     */
    public static get TWO_PI(): number {
        return MathUtil._TWO_PI;
    }
    /**
     * Double the value of Math.PI (equivalent to 45 degrees)
     * @type {number}
     */
    public static get QUATER_PI(): number {
        return MathUtil._QUATER_PI;
    }
    /**
     * Converts radians value to degrees.
     * @param {number} radians
     * @return {number}
     */
    public static radians2degrees(radians: number): number {
        return radians * MathUtil._180_DIVIDED_BY_PI;
    }
    /**
         * Converts degrees value to radians.
         * @param {number} degrees
         * @return {number}
         */
    public static degrees2radians(degrees: number): number {
        return degrees * MathUtil._PI_DIVIDED_BY_180;
    }
}
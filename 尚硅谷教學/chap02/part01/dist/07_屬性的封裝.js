"use strict";
(function () {
    //定義一個表示人的類
    class Person {
        /**
         * getter 方法用來讀取屬性
         * setter 方法用來設置屬性
         *    - 它們被稱為屬性的存取器
        */
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // TS中設置getter方法的方式
        get name() {
            return this.name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    }
    const per = new Person('terry', 14);
    /**
     * 現在屬性是在對象中設置的，屬性可以任意的被修改
     *   屬性可以依意被修改將會導致對象中的數據變得非常不安全
    */
    console.log(per);
})();

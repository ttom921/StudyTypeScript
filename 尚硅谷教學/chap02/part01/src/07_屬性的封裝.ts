(function () {
    //定義一個表示人的類
    class Person {
        //TS可以在屬性添加屬性的修飾符
        /** 
         * public: 修飾的屬性可以在任意位置訪問(修改) 默認值
         * private: 私有屬性，私有屬性只能在類內部進行訪問(修改)
         *         - 通過在類中添加方法使得私有屬性可以被外部訪問
         * protected: 在該類和其子類
        */
        private _name: string;
        private _age: number;
        /** 
         * getter 方法用來讀取屬性
         * setter 方法用來設置屬性
         *    - 它們被稱為屬性的存取器
        */
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        // TS中設置getter方法的方式
        get name(): string {
            return this.name;
        }
        set name(value: string) {
            this._name = value;
        }
        get age(): number {
            return this._age;
        }
        set age(value: number) {
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
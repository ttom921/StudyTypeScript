(function () {
    /** 
     *  在定義函數或是類時，如枎遇到類型不明確就可以使用泛型
    */
    function fn<T>(a: T): T {
        return a;
    }

    //可以直接調用具有泛型的函數
    let result = fn(10); //不指定泛型，TS可以自動對類型進行推斷
    let result2 = fn<string>('hello');//指定泛型

    function fn2<T, K>(a: T, b: K): T {
        console.log(b);
        return a;
    }
    fn2(10, 'hello');

    //泛型可以同時指定多個
    fn2<number, string>(11, 'world');

    interface Inter {
        length: number;
    }
    //T extends Inter 表示泛型T必須是Inter實現類(子類)
    function fn3<T extends Inter>(a: T): number {
        return a.length
    }
    fn3("123");
    //fn3(a:456);
    //fn3({name:"terry"})
    fn3({ length: 10 });

    class MyClass<T>{
        name: T;
        constructor(name: T) {
            this.name = name;
        }
    }
    const mc = new MyClass("terry");
    const mc2 = new MyClass<string>("tommy");

})();
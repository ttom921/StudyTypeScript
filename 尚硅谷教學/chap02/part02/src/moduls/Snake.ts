class Snake {
    //表示蛇頭的元素
    head: HTMLElement;
    //蛇的身體(包括蛇頭)
    bodies: HTMLCollectionOf<HTMLElement>;
    //獲取蛇的容器
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.element.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'div');
    }
    //獲取蛇的坐標(蛇頭坐標)
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }

    //設置蛇頭坐標
    set X(value: number) {
        //console.log("snake set value=", value);
        //如果新值和舊值相同，則直接返回不再修改
        if (this.X === value) {
            return;
        }
        //X的值合法範圍-290之間
        if (value < 0 || value > 290) {
            //進入判斷說明蛇撞牆了
            throw new Error("蛇撞牆了！");
        }
        this.head.style.left = value + 'px';
    }
    set Y(value: number) {
        //如果新值和舊值相同，則直接返回不再修改
        if (this.Y == value) {
            return;
        }
        //Y的值合法範圍-290之間
        if (value < 0 || value > 290) {
            //進入判斷說明蛇撞牆了
            throw new Error("蛇撞牆了！");
        }
        this.head.style.top = value + 'px';
    }

    //蛇增加身體的方法
    addBody() {
        //向element 中添加一個div
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }


}
export default Snake;
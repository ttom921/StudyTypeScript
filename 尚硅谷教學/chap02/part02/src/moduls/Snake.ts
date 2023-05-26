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
        this.bodies = this.element.getElementsByTagName('div');
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
        //修改x時，是在修改水平坐標，蛇在左右移動，蛇在向左移動時，不能向右掉頭，反之亦然
        if (this.bodies[1] && (this.bodies[1].offsetLeft === value)) {
            //console.log("水平方向發生了掉頭");
            if (value > this.X) {
                //如果新值value大於舊值，則說明蛇在向左走，此時發生掉頭，應該使蛇繼續向左走
                value = this.X - 10;
            } else {
                //向右走
                value = this.X + 10;
            }
        }

        //移動身體
        this.moveBody();
        this.head.style.left = value + 'px';
        //檢查是否撞到自已
        this.checkHitBody();
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
        //修改y時，是在修改垂直坐標，蛇在上下移動，蛇在向下移動時，不能向上掉頭，反之亦然
        if (this.bodies[1] && (this.bodies[1].offsetTop === value)) {
            //console.log("垂直方向發生了掉頭");
            if (value > this.Y) {
                //如果新值value大於舊值，則說明蛇在向上走，此時發生掉頭，應該使蛇繼續向上走
                value = this.Y - 10;
            } else {
                //向下走
                value = this.Y + 10;
            }
        }
        //移動身體
        this.moveBody();
        this.head.style.top = value + 'px';
        //檢查是否撞到自已
        this.checkHitBody();
    }

    //蛇增加身體的方法
    addBody() {
        //向element 中添加一個div
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }

    //一個蛇身體移動的方法
    moveBody() {
        /**
         * 將後邊的身體設置為前邊身體的位置
         *  舉例子
         *      第4節 = 第3節的位置
         *      第3節 = 第2節的位置
         *      第2節 = 蛇頭的位置
         */

        //遍歷獲取所有的身體

        for (let i = this.bodies.length - 1; i > 0; i--) {
            //console.log(this.bodies[i]);
            //獲取前邊身體的位置
            let X = this.bodies[i - 1].offsetLeft;
            let Y = this.bodies[i - 1].offsetTop;
            //設置當前身體的位置
            this.bodies[i].style.left = X + 'px';
            this.bodies[i].style.top = Y + 'px';
        }
    }
    checkHitBody() {
        // let X = this.head.offsetLeft;
        // let Y = this.head.offsetTop;
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];

        // }
        //獲取所有的身體，檢查其是否和蛇頭的坐標發生重疊
        for (let i = 1; i < this.bodies.length; i++) {
            const item = this.bodies[i];
            if (this.X === item.offsetLeft && this.Y === item.offsetTop) {
                throw new Error("蛇自撞了！");
            }

        }
    }


}
export default Snake;
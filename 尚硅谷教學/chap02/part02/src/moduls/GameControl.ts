//引入其它類

import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//遊戲控制器，控制其他的所有類
class GameControl {
    //定義三個屬性
    //蛇
    snake: Snake;
    //食物
    food: Food;
    //記分板
    scorePanel: ScorePanel;
    //創建一個屬性來存儲存蛇的移動方向(也就是按鍵的方向)
    direction: string = '';
    //創建一個屬性用來記錄游戲是否結束
    isLive = true;


    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 遊戲的初始化方法，調用游戲即開始
    init() {
        //綁定鍵盤按鍵按下的事件
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        //調用run方法，使蛇移動
        this.run();
    }
    /**
    ArrowUp
    ArrowDown
    ArrowLeft
    ArrowRight
    */
    //創建一個鍵盤挾下的響應函數
    keydownHandler(event: KeyboardEvent) {
        //console.log(event.key);
        // 需要檢查event.key的值是否合法(用戶是否按了正確的按鍵)
        //修改direction的屬性
        this.direction = event.key;

    }

    //創建一個控制蛇移動的方法
    run() {
        /**
         * 根據方向(this.direction)來使蛇的位置改變
         * 向上 top 減少 
         * 向下 top 增加
         * 向左 left 減少
         * 向右 left 增加
         */
        // 獲取蛇現在坐標
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根據方向來修改值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;

        }
        //檢查蛇是否吃到食物
        this.checkEat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            // 進入到catch, 說明出現了異常游戲結束，彈出一個提示信息
            let message = 'Unknown Error'
            if (e instanceof Error) message = e.message
            alert(message);
            //將isLive設置為false
            this.isLive = false;
        }


        //開啟一個定時調用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    //用來檢查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            console.log("吃到食物了");
            //食物的位置要進行重置
            this.food.change();
            //分數增加
            this.scorePanel.addScore();
            //蛇要增加一節
            this.snake.addBody();
        }
    }

}
export default GameControl;
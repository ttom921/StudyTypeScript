// 定義表示記分牌的類
class ScorePanel {
    //score與level用來記錄分數和等級
    score = 0;
    level = 1;
    // 分數和等級所在的元素，在構造函數中進行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    //設置一個變量限制等級
    maxLevel: number;
    //設置一個變數表示多少分時升級
    upScore: number;
    constructor(maxLevel = 10, upScore: number = 10) {
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;

    }

    //設置一個加分的方法
    addScore() {
        //使分數自增
        this.scoreEle.innerHTML = ++this.score + '';
        //判斷分數是多少
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    //提升等級的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

// const score = new ScorePanel();
// for (let index = 0; index < 200; index++) {
//     score.addScore();

// }
export default ScorePanel;
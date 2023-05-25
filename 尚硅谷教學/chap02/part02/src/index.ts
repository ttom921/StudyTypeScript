//引入樣式
import './style/index.less';

// import Food from './moduls/Food';
// import ScorePanel from './moduls/ScorePanel';

// //測試代碼
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

// const score = new ScorePanel();
// for (let index = 0; index < 200; index++) {
//     score.addScore();

// }

import GameControl from './moduls/GameControl';
new GameControl();
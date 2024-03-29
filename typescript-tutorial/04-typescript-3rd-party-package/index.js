var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("index", ["require", "exports", "jquery"], function (require, exports, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    //當網站的元素載入時執行
    (0, jquery_1.default)(document).ready(function () {
        const $btn = (0, jquery_1.default)('#main-btn');
        const $count = (0, jquery_1.default)('#count');
        let count = 0;
        //每一次按鈕被按的時候，更新$count元素
        $btn.click(() => {
            count++;
            $count.text(count);
        });
    });
});

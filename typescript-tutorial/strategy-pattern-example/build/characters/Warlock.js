"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warlock = void 0;
const BasicWand_1 = require("./../weapons/BasicWand");
const Character_1 = require("./Character");
const Role_1 = require("./Role");
class Warlock extends Character_1.Character {
    constructor(name) {
        super(name, Role_1.Role.Warlock, 
        //選擇初始化的武器!
        new BasicWand_1.BasicWand());
    }
}
exports.Warlock = Warlock;
;

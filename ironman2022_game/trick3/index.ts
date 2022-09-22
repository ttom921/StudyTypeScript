
import { Point } from "../gemo/Points.js";
/** 玩家類別 */
class Player {
    /** 有ID */
    id: string;
    /** 有血量 */
    hp: number;
    /** 有位置 */
    position: Point;
}

/** 火焰類別 */
class Flame {
    /** 有位置 */
    position: Point;
    /** 有碰撞半徑 */
    radius: number;
    /** 有傷害力 */
    damage: number;
    /** 有傷害冷卻時間 */
    cooldownDuration: number;
}
/** 遊戲類別 */
class Game {
    /** 所有玩家的陣列 */
    players: Player[] = [];
    /** 所有火焰的陣列 */
    flames: Flame[] = [];
    /** 還要有一台中央冷卻系統(類別寫在下面) */
    cooldownSystem = new CentralCooldownSystem();
}

/** 冷卻機 */
class CooldownManager {
    /** 一個用來儲存所有人物冷卻時間的Map
     * 這裏用的型別比較怪，沒看過的同學可能會嚇一跳!
     * 下面的註解會再詳加說明。
     */
    endTime: { [key: string]: number } = {};

    /** 檢查某個人物id的冷卻時間是否已結束 */
    isCooldownEnded(id: string): boolean {
        // 取得id對應的冷卻時間
        // || 0 是指在 this.endTime[id]的值不存在的時候，選用0這個數字
        let end = this.endTime[id] || 0;
        // Date.now() 是系統工具，會給我們目前的系統時間(單位為毫秒)
        return Date.now() > end;
    }

    /** 更新某個人物id的冷卻時間 */
    updateCooldownEnd(id: string, cooldown: number) {
        let currentEndtime = this.endTime[id] || 0;
        this.endTime[id] = Math.max(Date.now() + cooldown, currentEndtime);
    }
}
/** 中央冷卻系統 */
class CentralCooldownSystem {
    /** 用來儲存所有冷卻機的Map */
    managers: { [key: string]: CooldownManager } = {};
    /** 依功能取得對應的冷卻機 */
    getManager(key: string): CooldownManager {
        // 先在this.managers裏找
        let manager = this.managers[key];
        // 如果manager不存在就新增一個
        if (!manager) {
            manager = new CooldownManager();
            this.managers[key] = manager;
        }
        return manager;
    }
    /** 取得燒傷的冷卻機 */
    getBurningManager(): CooldownManager {
        return this.getManager('burning');
    }
}

/** 火焰燒傷更新函 */
function updateBurningDamages(game: Game) {
    // 跑所有火焰的迴圈
    for (let flame of game.flames) {
        // 跑所有玩家的迴圈
        for (let player of game.players) {
            // 檢查玩家是否在火焰半徑內
            if (Point.distance(flame.position, player.position) < flame.radius) {
                // 檢查玩家冷卻是否已結束
                if (game.cooldownSystem.getBurningManager().isCooldownEnded(player.id)) {
                    // 記錄一下受傷前的血量
                    let originHP = player.hp;
                    // 給予玩家傷害
                    player.hp -= flame.damage;
                    // 重新設定玩家的冷卻時間
                    game.cooldownSystem
                        .getBurningManager()
                        .updateCooldownEnd(player.id, flame.cooldownDuration);
                    // 列印一下這個燒傷事件
                    console.log(`玩家${player.id}受到燒傷 hp: ${originHP} => ${player.hp}`);
                }
            }
        }
    }
}

// 實際新增具體例子來跑看看
let game = new Game();

function createRandomPlayer() {
    let player = new Player();
    // 給玩家一個ID
    player.id = '第' + (game.players.length + 1) + '位';
    // 亂數在100x100的正方形內隨機取一點
    player.position = new Point(Math.random() * 100, Math.random() * 100);
    player.hp = 100;
    game.players.push(player);
}

// 新增三位玩家
createRandomPlayer();
createRandomPlayer();
createRandomPlayer();

function createFlame() {
    let flame = new Flame();
    flame.cooldownDuration = 1000;
    flame.damage = 5;
    flame.position = new Point(Math.random() * 100, Math.random() * 100);
    flame.radius = 6;
    game.flames.push(flame);
}

// 新增一百朵火焰
for (let i = 0; i < 100; i++) {
    createFlame();
}

// 遊戲更新
function gameUpdate(): void {
    requestAnimationFrame(gameUpdate);
    updateBurningDamages(game);
}
requestAnimationFrame(gameUpdate);
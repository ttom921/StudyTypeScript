
import { StabAttack } from './../abilities/StabAttack';
import { Weapon } from './Weapon';

export class Dagger extends Weapon {
    public readonly name = 'Dagger';

    // 匕首可以進行刺擊的動作
    public attackStrategy = new StabAttack();

    //任何職業都可以進行刺擊，在此留為空陣列
    public availableRoles = [];

    /// switchAttackStrategy與attack方法由父類提供
}
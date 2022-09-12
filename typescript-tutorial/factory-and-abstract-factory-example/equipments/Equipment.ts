import { Role } from '../characters/Role';
import { Equipments } from './Equipments';

//任何裝備必須擁有的特性
export interface Equipment {
    name: string,
    type: Equipments;
    availableRoles: Role[];
}
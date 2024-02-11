import { CombatantInfo } from "$lib/classes/CombatantInfo";
import type { Damage } from "./Damage";

export class AveragedData {
    AveragedCombatantInfo: CombatantInfo | undefined;
    AveragedDamage: {[Name: string]: Damage} | undefined;

    constructor(damage: {[Name: string]: Damage}, combatantInfo: CombatantInfo) {
        this.AveragedCombatantInfo = combatantInfo;
        this.AveragedDamage = damage;
    }
}
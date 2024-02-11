import type { Output } from "$lib/ts/types/Output";
import { readable, type Readable } from "svelte/store";
import json from '$lib/output.json';
import { Damage } from "$lib/classes/Damage";
import { AveragedData } from "$lib/classes/AveragedData";
import { CombatantInfo } from "$lib/classes/CombatantInfo";

export const averagedOutput = readable<undefined | AveragedData>(undefined, (set) => {
    let typedJson: {[Name: string]: Output} = json;

    let temp = GetAverageDamage(typedJson);
    let combatantInfo = GetAverageCombatantInfo(typedJson);

    set(new AveragedData(temp, combatantInfo));

    return () => undefined;
});

function GetAverageDamage(input: {[Name: string]: Output}) {
    let temp: {[Name: string]: Damage} = {};

    Object.values(input).forEach(val => {
        Object.values(val.DamageDone).forEach(output => {
            //Key exists
            if (output.Name in temp) {
                temp[output.Name].Count += 1;
                temp[output.Name].Total += output.Total;
                temp[output.Name].Casts += output.Uses;
                return;
            }

            temp[output.Name] = new Damage();
            temp[output.Name].Count = 1;
            temp[output.Name].Total = output.Total;
            temp[output.Name].Casts = output.Uses;
            temp[output.Name].AbilityIcon = output.AbilityIcon;
            temp[output.Name].GUID = output.GUID;
            temp[output.Name].Type = output.Type;
        })
    });

    console.log(temp);    
    return temp;
}

function GetAverageCombatantInfo(input: {[Name: string]: Output}) {
    let combatantInfo = new CombatantInfo();

    Object.values(input).forEach(val => {
        Object.values(val.CombatantInfo).forEach(output => {
            combatantInfo.Agility += output.Agility.Max;
            // combatantInfo.Avoidance += output.Avoidance.Max;
            combatantInfo.Crit += output.Crit.Max;
            combatantInfo.Haste += output.Haste.Max;
            // combatantInfo.ItemLevel += output.ItemLevel?.Max;
            // combatantInfo.Leech += output.Leech.Max;
            combatantInfo.Mastery += output.Mastery.Max;
            // combatantInfo.Speed += output.Speed.Max;
            combatantInfo.Stamina += output.Stamina.Max;
            combatantInfo.Versatility += output.Versatility.Max;
        })
    });

    combatantInfo.Agility /= 100;
    // combatantInfo.Avoidance /= 100;
    combatantInfo.Crit /= 100;
    combatantInfo.Haste /= 100;
    // combatantInfo.ItemLevel /= 100;
    // combatantInfo.Leech /= 100;
    combatantInfo.Mastery /= 100;
    // combatantInfo.Speed /= 100;
    combatantInfo.Stamina /= 1000;
    combatantInfo.Versatility /= 100;

    return combatantInfo;
}
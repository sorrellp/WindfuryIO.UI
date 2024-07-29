import { RaidList } from "$lib/ts/Constants";
import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
    console.log(param);

    //raid/boss
    let params = param.split('/');

    if (params.length != 2) {
        return false;
    }

    if (!(params[0].toLowerCase() in RaidList)) {
        return false;
    }
    
    return true;
    //return RaidList[params[0]].has(params[1]);
}
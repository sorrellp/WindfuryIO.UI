type Output = {
    DamageDone: Array<DamageDone>,
    CombatantInfo: CombatantInfo
}

type DamageDone = {
    Name: string,
    GUID: number,
    Type: number,
    Total: number,
    AbilityIcon: string,
    Uses: number,
    HitCount: number,
    TickCount: number,
    CritHitCount: number,
    HitDetails: Array<HitDetail>
}

type CombatantInfo = {
    Stats: Stats
}

type Stats = {
    Speed: Stat,
    Agility: Stat,
    Mastery: Stat,
    Crit: Stat,
    ItemLevel: Stat,
    Stamina: Stat,
    Avoidance: Stat,
    Haste: Stat,
    Versatility: Stat,
    Leech: Stat
}

type Stat = {
    Min: number,
    Max: number
}

type HitDetail = {
    Type: string,
    Total: number,
    Count: number,
    Min: number,
    Max: number
}

export type { HitDetail }
export type { Output }
export type { DamageDone, Stat, Stats, CombatantInfo }
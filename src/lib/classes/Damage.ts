export class Damage {
    public Count: number | undefined;
    public Total: number | undefined;
    public Casts: number | undefined;
    public Type: DamageType = DamageType.Physical;
    public AbilityIcon: string | undefined;
    public GUID: number | undefined;

    public get AverageTotal(): number {
        return Math.round(this.Total / this.Count);
    }

    public get AverageCasts(): number {
        return Math.round(this.Casts / this.Count);
    }
}

export enum DamageType {
    Physical = 1,
    Fire,
    Ice,
    Nature = 8,
    Volcanic,
    Elemental = 28
}
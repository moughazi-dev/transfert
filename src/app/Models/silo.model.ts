export class Silo {
    id!: number;
    subsystemName!: string;
}

export class SiloNiveau {
    id!: number;
    shiftMemberPlanId!:number;
    unitId!: number
    subsystemId!: number;
    amount!: number;
    validationId!: number;
}

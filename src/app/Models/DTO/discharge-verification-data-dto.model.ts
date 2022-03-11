export class DischargeVerificationDataDTO {

    shiftDate!: string;
    shiftOrder!: number;
    chefEscaleName!: number;
    sumQtyDischarged!: number;
    operators!: DischargeVerificationOperator[];
}


class DischargeVerificationOperator {
    operatorName!: string;
    qtyDischarged!: number;    
}
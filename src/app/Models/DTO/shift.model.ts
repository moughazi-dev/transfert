import { Time } from "@angular/common"
import { ShiftDetails } from "./shift-details.model";

export class Shift {

    shiftsDetails!: ShiftDetails[];
    shiftActivityId!: number;
    shiftComment!: string;
    shiftValidityStart!: Date;
    shiftValidityEnd!: Date;
}

import { Evenement } from '../evenement.model';
import { GetMembersByShiftOrderAndShiftDate } from '../View/get-members-by-shift-order-and-shift-date.model';
export class AddCargoEvent {

    id!: number;
    cargoId!: number;
    shiftOrder!: number;
    operateur!: GetMembersByShiftOrderAndShiftDate;
    evenement!: Evenement;
    startDate!: string;
    endDate!: string;
    startTime!: string;
    endTime!: string;
    observation!: string;
}


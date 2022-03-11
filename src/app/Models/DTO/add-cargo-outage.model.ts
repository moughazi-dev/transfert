import { EquipementView } from "../View/equipement-view.model";
import { GetMembersByShiftOrderAndShiftDate } from "../View/get-members-by-shift-order-and-shift-date.model";
import { OutageCausesView } from "../View/outage-causes-view.model";

export class AddCargoOutage {

    id!: number;
    cargoId!: number;
    activityId!: number;
    shiftOrder!: number;
    operateur!: GetMembersByShiftOrderAndShiftDate;
    equipement!: EquipementView;
    // equipementId!: number;
    outageCause!: OutageCausesView;
    // outageCauseId!: number;
    startDate!: string;
    endDate!: string;
    startTime!: string;
    endTime!: string;
    observation!: string;
}


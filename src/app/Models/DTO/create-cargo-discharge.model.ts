import { Contamination } from "../contamination.model";
import { Hazard } from "../hazard.model";
import { GetMembersByShiftOrderAndShiftDate } from "../View/get-members-by-shift-order-and-shift-date.model";
import { PersonView } from "../View/person-view.model";
import { ZoneArea } from "../zone-area.model";
import { CargoDischargeContamination } from "./cargo-discharge-contamination.model";
import { DischargeQuantity } from "./discharge-quantity.model";

export class CreateCargoDischarge {

    shiftDate!: string;
    shiftId!: number;
    cargoId!: number;
    chefEscale!: GetMembersByShiftOrderAndShiftDate;
    tonnageQtyDechargee!: number;
    cargoDischargeContaminations!: CargoDischargeContamination[];
    perturbations!: Hazard[];
    dischargeQuantities!: DischargeQuantity[];
}

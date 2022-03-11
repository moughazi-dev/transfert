import { Time } from "@angular/common";
import { EquipementView } from "../View/equipement-view.model";
import { GetMembersByShiftOrderAndShiftDate } from "../View/get-members-by-shift-order-and-shift-date.model";
import { PersonView } from "../View/person-view.model"

export class DischargeQuantity {

    id!: number;
    operateur!: GetMembersByShiftOrderAndShiftDate;
    debut!: Time;
    fin!: Time;
    equipement!: EquipementView;
    tonnage!: number;
}



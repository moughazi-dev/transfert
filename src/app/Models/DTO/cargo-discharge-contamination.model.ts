import { Contamination } from "../contamination.model";
import { ZoneArea } from "../zone-area.model";

export class CargoDischargeContamination {

        id!: number;
        typeContamination!: Contamination;
        tonnageContamination!: number;
        zoneAreaContamination!: ZoneArea;
        pmDebutContamination!: number;
        pmFinContamination!: number;
}




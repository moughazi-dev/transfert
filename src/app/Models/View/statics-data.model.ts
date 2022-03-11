import { CargoDischargeMode } from "../cargo-discharge-mode.model";
import { CargoDischargeType } from "../cargo-discharge-type.model";
import { Contamination } from "../contamination.model";
import { Country } from "../country.model";
import { DocumentCategory } from "../document-category.model";
import { AddCargoEvent } from "../DTO/add-cargo-event.model";
import { Evenement } from "../evenement.model";
import { Hazard } from "../hazard.model";
import { ShiftActivity } from "../shift-activity.model";
import { Site } from "../site.model";
import { ZoneArea } from "../zone-area.model";
import { EquipementView } from "./equipement-view.model";
import { OutageCausesView } from "./outage-causes-view.model";
import { PersonView } from "./person-view.model";

export class StaticsData {

    countries!: Country[];
    zoneAreas!: ZoneArea[];
    sites!: Site[];
    dischargeModes!: CargoDischargeMode[];
    dischargeTypes!: CargoDischargeType[];
    shiftActivities!: ShiftActivity[];
    hazards!: Hazard[];
    contaminations!: Contamination[];
    equipements!: EquipementView[];
    persons!: PersonView[];
    events!: Evenement[];
    outageCauses!: OutageCausesView[];
    documentCategories!: DocumentCategory[];
    
}

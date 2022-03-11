export class Constants {

    // Endpoints
    public static GET_NAVIRES_LIST: string = 'api/Stockage/addCargoSync';
    public static GET_CONSUMERS_LIST: string = 'consumers';
    public static POST_LOADING_PORT: string = 'loading_ports';
    public static POST_CARGO_SYNC: string = 'api/Stockage/addCargoSync';
    /////////
    public static GET_CARGO_DISCHARGE_VIEW_BY_NOM_LIST: string = 'api/Dechargement/getCargoDischargeViewByNomList';
    public static SAISIE_TRANSFER_QUANTITE: string = 'api/Transfer/createTransferQuantite';
    public static NIVEAU_SILO: string = 'api/Transfer/saisieNiveauSilo';
    public static GET_UNITS: string = 'api/Transfer/listUnits';
    public static GET_SILOS: string = 'api/Transfer/listSilos';
    public static GET_NIVEAU_SILOS: string = 'api/Transfer/listNiveauSilos';
    public static PROGRAMME_HEBDOMADAIRE: string = 'api/Transfer/filterProgrammeHebdomadaire';
    public static PROGRAMME_HEBDOMADAIRE_PRIMARY: string = 'api/Transfer/programmeHebdomadairePrimary';
    ///////
    public static GET_CARGO_VALUE_NAVIRES_LIST: string = 'api/Stockage/getCargoValueNavires';
    public static GET_CARGO_VALUE_NAVIRES_LIST_COUNT: string = 'api/Stockage/getCargoValueNaviresCount';
    public static GET_DISCHARGE_PLAN_LIST: string = 'api/Stockage/getDischargePlansViewList';
    public static GET_CARGO_DISCHARGE_PLAN_ZONES_LIST: string = 'api/Stockage/getCargoDischargePlanZoneList';
    public static GET_CARGO_DISCHARGE_VIEW_LIST: string = 'api/Dechargement/getCargoDischargeViewList';
    public static GET_MEMBERS_BY_SHIFT: string = 'api/Dechargement/getMembersByShift';
    public static GET_DISCHARGE_VERIFICATION: string = 'api/Dechargement/getDischargeVerificationDataDTO';
    public static GET_OPERATORS: string = 'api/Dechargement/getOperators';
    public static GET_CARGO_BY_ID: string = 'api/Stockage/getCargoById';
    public static CREATE_DISCHARGE_PLAN: string = 'api/Stockage/createCargoDischargePlan';
    public static START_CARGO_DISCHARGE: string = 'api/Stockage/startCargoDischarge';
    public static END_CARGO_DISCHARGE: string = 'api/Dechargement/endCargoDischarge';
    public static CREATE_CARGO_EVENTS: string = 'api/Dechargement/createCargoEvenets';
    public static CREATE_CARGO_OUTAGES: string = 'api/Dechargement/createCargoOutages';
    public static CREATE_CARGO_DOCUMENTS: string = 'api/Dechargement/createCargoDocuments';
    public static CREATE_CARGO_DISCHARGE: string = 'api/Dechargement/createCargoDischarge';
    public static UPDATE_CARGO_DISCHARGE_PLANS: string = 'api/Stockage/updatedCargoDischargePlans';
    public static GET_STATICS_DATA: string = 'api/auth/getStaticsData';

}

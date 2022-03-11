export class CreateCargoSyncDTO {

    // CargoSync table
    external_id!: string;
    vessel!: string;
    demrate!: string;
    consumer_id!: string;
    supplier!: string;
    quantity!: number;
    shipment_name!: string;
    contrat!: string;
    load_terminal_id!: string;
    lp_laycan_start!: string;
    lp_laycan_end!: string;
    lp_eta!: string;
    lp_etb!: string;
    up_eta_first!: string;
    up_eta!: string;

    // LoadingPort table 
    load_terminal!: string;
    loading_rate!: string;
    average_trip_time!: number;

    // Cargo table
    sailing_date!: string;
    cargo_contract!: string;
}

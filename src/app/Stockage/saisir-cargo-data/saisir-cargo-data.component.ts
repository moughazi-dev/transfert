import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { CargoSync } from 'src/app/Models/cargo-sync.model';
import { Cargo } from 'src/app/Models/cargo.model';
import { Consumer } from 'src/app/Models/consumer.model';
import { CreateCargoSyncDTO } from 'src/app/Models/DTO/create-cargo-sync-dto.model';
import { LoadingPort } from 'src/app/Models/loading-port.model';
import { EventService } from 'src/app/Services/event.service';
import { StockageService } from 'src/app/Services/stockage.service';

@Component({
  selector: 'app-saisir-cargo-data',
  templateUrl: './saisir-cargo-data.component.html',
  styleUrls: ['./saisir-cargo-data.component.css']
})
export class SaisirCargoDataComponent implements OnInit {

  // Form
  SaisirCargoDataFG: FormGroup;
  vesselFC: FormControl;
  demRateFC: FormControl;
  // consumerFC: FormControl;
  supplierFC: FormControl;
  quantityFC: FormControl;
  contratFC: FormControl;
  loadingPortFC: FormControl;
  laycanStartFC: FormControl;
  laycanEndFC: FormControl;
  etaLoadingPortFC: FormControl;
  loadingRateFC: FormControl;
  berthingDelayFC: FormControl;
  sailingDateFC: FormControl;
  totalLoadTimeFC: FormControl;
  averageTripTimeFC: FormControl;
  laycanJLStartFC: FormControl;
  laycanJLEndFC: FormControl;
  etaJLFC: FormControl;

  
  consumersList!: Consumer[];
  consumerSelected!: Consumer;

  // icons
  faCheck = faCheck;

  constructor(private stockService: StockageService, private eventService: EventService,) { 

    // init form controls 
    this.vesselFC = new FormControl();
    this.demRateFC = new FormControl();
    // this.consumerFC = new FormControl();
    this.supplierFC = new FormControl();
    this.quantityFC = new FormControl();
    this.contratFC = new FormControl();
    this.loadingPortFC = new FormControl();
    this.laycanStartFC = new FormControl(moment().format('YYYY-MM-DD'));
    this.laycanEndFC = new FormControl(moment().format('YYYY-MM-DD'));
    this.etaLoadingPortFC = new FormControl();
    this.loadingRateFC = new FormControl();
    this.berthingDelayFC = new FormControl(moment().format('YYYY-MM-DD'));
    this.sailingDateFC = new FormControl(moment().format('YYYY-MM-DD'));
    this.totalLoadTimeFC = new FormControl();
    this.averageTripTimeFC = new FormControl();
    this.laycanJLStartFC = new FormControl(moment().format('YYYY-MM-DD'));
    this.laycanJLEndFC = new FormControl(moment().format('YYYY-MM-DD'));
    this.etaJLFC = new FormControl();

    // init form group 
    this.SaisirCargoDataFG = new FormGroup({
      vesselFC: this.vesselFC,
      demRateFC: this.demRateFC,
      // consumerFC: this.consumerFC,
      supplierFC: this.supplierFC,
      quantityFC: this.quantityFC,
      contratFC: this.contratFC,
      loadingPortFC: this.loadingPortFC,
      laycanStartFC: this.laycanStartFC,
      laycanEndFC: this.laycanEndFC,
      etaLoadingPortFC: this.etaLoadingPortFC,
      loadingRateFC: this.loadingRateFC,
      berthingDelayFC: this.berthingDelayFC,
      sailingDateFC: this.sailingDateFC,
      totalLoadTimeFC: this.totalLoadTimeFC,
      averageTripTimeFC: this.averageTripTimeFC,
      laycanJLStartFC: this.laycanJLStartFC,
      laycanJLEndFC: this.laycanJLEndFC,
      etaJLFC: this.etaJLFC,
    });

    // load consumers list 
    this.consumersList = JSON.parse(localStorage.getItem('consumers_list') || '{}');

  }

  ngOnInit(): void {
  }

  addCargoData(){

    let loadPort: LoadingPort = new LoadingPort();
    loadPort.average_trip_time = this.averageTripTimeFC.value;
    loadPort.load_terminal = this.loadingPortFC.value;
    loadPort.loading_rate = this.loadingRateFC.value;

    let cargoSync: CargoSync = new CargoSync();
    cargoSync.vessel = this.vesselFC.value;
    cargoSync.demrate = this.demRateFC.value;
    cargoSync.consumer_id = this.consumerSelected.id.toString();
    cargoSync.supplier = this.supplierFC.value;
    cargoSync.quantity = this.quantityFC.value;
    cargoSync.contrat = this.contratFC.value;
    cargoSync.lp_laycan_start = this.laycanStartFC.value;
    cargoSync.lp_laycan_end = this.laycanEndFC.value;
    cargoSync.lp_eta = this.etaLoadingPortFC.value;
    cargoSync.lp_etb = this.berthingDelayFC.value;

    let cargo: Cargo = new Cargo();
    cargo.sailing_date = this.sailingDateFC.value;
    cargo.vessel = this.vesselFC.value;
    cargo.cargo_contract = this.contratFC.value;
    cargo.quantity = this.quantityFC.value;

    let createCargoSyncDTO: CreateCargoSyncDTO = new CreateCargoSyncDTO();
    createCargoSyncDTO.average_trip_time = this.averageTripTimeFC.value;
    createCargoSyncDTO.load_terminal = this.loadingPortFC.value;
    createCargoSyncDTO.loading_rate = this.loadingRateFC.value;
    createCargoSyncDTO.vessel = this.vesselFC.value;
    createCargoSyncDTO.demrate = this.demRateFC.value;
    createCargoSyncDTO.consumer_id = this.consumerSelected.id.toString();
    createCargoSyncDTO.supplier = this.supplierFC.value;
    createCargoSyncDTO.quantity = this.quantityFC.value;
    createCargoSyncDTO.contrat = this.contratFC.value;
    createCargoSyncDTO.lp_laycan_start = this.laycanStartFC.value;
    createCargoSyncDTO.lp_laycan_end = this.laycanEndFC.value;
    createCargoSyncDTO.lp_eta = this.etaLoadingPortFC.value;
    createCargoSyncDTO.lp_etb = this.berthingDelayFC.value;
    createCargoSyncDTO.sailing_date = this.sailingDateFC.value;
    createCargoSyncDTO.cargo_contract = this.contratFC.value;

    // this.stockService.createLoadingPort(loadPort).subscribe((data) => {
    //   if(data){
    //     console.warn('Load Port created successfully', data);
    //     cargoSync.load_terminal_id = data.id.toString();
    //     this.stockService.createCargoSync(cargoSync).subscribe((data) => {
    //       console.warn('CargoSync created successfully', data);
    //       if(data){
    //         this.stockService.createCargo(cargo).subscribe((data) => {
    //           console.warn('Cargo created successfully', data);
    //           this.eventService.notifyGetNaviresEvent();
    //         }, (err) => {
    //           console.error(err)
    //         })
    //       }
    //     }, (err) => {
    //       console.error(err)
    //     })
    //   }
    // }, (err) => {
    //   console.error(err)
    // })
    console.warn('CargoSync ', createCargoSyncDTO);
    this.stockService.createCargoSync(createCargoSyncDTO).subscribe((data) => {
      console.warn('CargoSync created successfully', data);
    }, (err) => {
      console.error(err)
    })

    //console.error(moment(this.laycanStartFC.value).format('YYYY-MM-DD'));
    //console.error(moment(this.laycanEndFC.value).format('YYYY-MM-DD'));

  }

  objectComparisonFunction ( option: any, value: any ) : boolean {
    return option.id === value.id;
  }

}

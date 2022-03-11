import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CargoDischargeMode } from 'src/app/Models/cargo-discharge-mode.model';
import { CargoDischargePlan } from 'src/app/Models/cargo-discharge-plan.model';
import { CargoDischargeType } from 'src/app/Models/cargo-discharge-type.model';
import { CreateDischargePlan } from 'src/app/Models/DTO/create-discharge-plan.model';
import { Site } from 'src/app/Models/site.model';
import { Navire } from 'src/app/Models/View/navire.model';
import { StaticsData } from 'src/app/Models/View/statics-data.model';
import { ZoneArea } from 'src/app/Models/zone-area.model';
import { Zone } from 'src/app/Models/zone.model';
import { StockageService } from 'src/app/Services/stockage.service';

@Component({
  selector: 'app-saisir-plan-stockage',
  templateUrl: './saisir-plan-stockage.component.html',
  styleUrls: ['./saisir-plan-stockage.component.css'],
})
export class SaisirPlanStockageComponent implements OnInit {
  // Form
  SaisirDischargePlanDataFG: FormGroup;
  pmDebut: FormControl;
  pmFin: FormControl;

  sitesList!: Site[];
  siteSelected!: Site;

  zoneAreasList!: ZoneArea[];
  zoneAreaSelected!: ZoneArea;

  cargoDischargeTypesList!: CargoDischargeType[];
  cargoDischargeTypeSelected!: CargoDischargeType;

  cargoDischargeModesList!: CargoDischargeMode[];
  cargoDischargeModeSelected!: CargoDischargeMode;

  zoneList: Zone[]= [];
  indexZoneList: number = 0;


  // icons
  faCheck = faCheck;
  faPlus = faPlus;
  faTrash = faTrash;

  constructor(private stockService: StockageService, @Inject(MAT_DIALOG_DATA) public dataNavire: any) {
    this.pmDebut = new FormControl();
    this.pmFin = new FormControl();

    // init form group
    this.SaisirDischargePlanDataFG = new FormGroup({
      pmDebut: this.pmDebut,
      pmFin: this.pmFin,
    });
  }

  ngOnInit(): void {
    let staticsData: StaticsData = JSON.parse(localStorage.getItem('staticsData') || '{}');
    if(staticsData){
      console.error('value => ', staticsData);
      this.sitesList = staticsData.sites;
      this.zoneAreasList = staticsData.zoneAreas
      this.cargoDischargeTypesList = staticsData.dischargeTypes;
      this.cargoDischargeModesList = staticsData.dischargeModes;
    }

    if(this.dataNavire.updateDischargePlan){
      this.stockService.getCargoDischargePlanZoneList(this.dataNavire.navire.cargoId).subscribe((data) => {
        console.error(data);
        this.zoneList = data.respModel;
      }, (error) => {
        console.error(error);
      });
    }
    
  }

  addDischargePlanData() {

    console.log('this.navireTosend => ', this.dataNavire.navire);

    if(this.dataNavire.updateDischargePlan){

      let updateCargoDischargePlansdata = {
        cargoId:  this.dataNavire.navire.cargoId,
        dischargePlanZones: this.zoneList,

      }
      
      this.stockService.updatedCargoDischargePlans(updateCargoDischargePlansdata).subscribe((data) => {
        console.warn(data);
      }, (error) => {
        console.error(error);
      });
    }
    else
    {
      let createDischargePlan: CreateDischargePlan = {
        cargoValueNavire: this.dataNavire.navire,
        zoneList: this.zoneList,
      }
  
      console.log('createDischargePlan => ', createDischargePlan);
  
      this.stockService.createCargoDischargePlan(createDischargePlan).subscribe((data) => {
        console.warn(data);
      }, (error) => {
        console.error(error);
      });
    }

    
    
    

  }

  siteComparison(option: any, value: any): boolean {
    return option === value;
  }

  typeComparisonn(option: any, value: any): boolean {
    return option === value;
  }

  modeComparison(option: any, value: any): boolean {
    return option === value;
  }

  ligneComparison(option: any, value: any): boolean {
    return option === value;
  }

  addZone(){
    let zone: Zone = new Zone();
    zone.id = ++this.indexZoneList;
    this.zoneList.push(zone);
  }

  deleteZone(zone: Zone){
    let element_index = 0;
    let new_element: any = this.zoneList.find((el: any, index: any) => {
      element_index = index;
      return el.id === zone.id;
    });
    this.zoneList.splice (element_index, 1);
  }

}
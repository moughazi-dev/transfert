import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { Contamination } from 'src/app/Models/contamination.model';
import { CargoDischargeContamination } from 'src/app/Models/DTO/cargo-discharge-contamination.model';
import { CreateCargoDischarge } from 'src/app/Models/DTO/create-cargo-discharge.model';
import { DischargeQuantity } from 'src/app/Models/DTO/discharge-quantity.model';
import { Hazard } from 'src/app/Models/hazard.model';
import { EquipementView } from 'src/app/Models/View/equipement-view.model';
import { GetMembersByShiftOrderAndShiftDate } from 'src/app/Models/View/get-members-by-shift-order-and-shift-date.model';
import { PersonView } from 'src/app/Models/View/person-view.model';
import { StaticsData } from 'src/app/Models/View/statics-data.model';
import { ZoneArea } from 'src/app/Models/zone-area.model';
import { DechargementService } from 'src/app/Services/dechargement.service';

@Component({
  selector: 'app-debut-dechargement',
  templateUrl: './debut-dechargement.component.html',
  styleUrls: ['./debut-dechargement.component.css']
})
export class DebutDechargementComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  navireInfos!: FormGroup;
  dischargeInfos!: FormGroup;

  totalTonnageQtyDechargee: number = 0;

  dischargedQuantitiesList: DischargeQuantity[] = [];
  
  indexdischargedQuantitiesList: number = 0;

  personsList: PersonView[] = [];
  equipementsList: EquipementView[] = [];
  zoneAreasList: ZoneArea[] = [];
  contaminationsList: Contamination[] = [];
  perturbationsList: Hazard[] = [];

  memberSelected!: GetMembersByShiftOrderAndShiftDate;

  chefsEscaleList: GetMembersByShiftOrderAndShiftDate[] = [];
  operateursList: GetMembersByShiftOrderAndShiftDate[] = [];

  cargoDischargeContaminationsList: CargoDischargeContamination[] = [];
  indexCargoDischargeContaminationsList: number = 0;

  isLoading: boolean = false;

  // icons
  faPlus = faPlus;
  faTrash = faTrash;

  constructor(@Inject(MAT_DIALOG_DATA) public dischargeData: any, private _formBuilder: FormBuilder, private dechargementService: DechargementService) {
    console.error(dischargeData.discharge)
   }

  ngOnInit(): void {
    
    let staticsData: StaticsData = JSON.parse(localStorage.getItem('staticsData') || '{}');
    if(staticsData){
      this.personsList = staticsData.persons;
      this.equipementsList = staticsData.equipements;
      this.zoneAreasList = staticsData.zoneAreas;
      this.contaminationsList = staticsData.contaminations;
      this.perturbationsList = staticsData.hazards;
    }
    
    this.dischargeInfos = this._formBuilder.group({
      shiftDate: ['', Validators.required],
      shiftOrder: ['', Validators.required],
      chefEscale: ['', Validators.required],
      operateur: ['', Validators.required],
      debut: ['', Validators.required],
      fin: ['', Validators.required],
      equipement: ['', Validators.required],
      tonnageQtyDechargee: ['', Validators.required],
      typeContamination: ['', Validators.required],
      tonnageContamination: ['', Validators.required],
      zoneAreaContamination: ['', Validators.required],
      pmDebutContamination: ['', Validators.required],
      pmFinContamination: ['', Validators.required],
      perturbations: ['', Validators.required],
    });
  }

  valider(){
    let createCargoDischarge: CreateCargoDischarge = new CreateCargoDischarge();

    createCargoDischarge.shiftDate = moment(this.dischargeInfos.get('shiftDate')?.value).format('YYYY-MM-DD');
    createCargoDischarge.shiftId = this.memberSelected.shift_id;
    createCargoDischarge.cargoId = this.dischargeData.discharge.cargoId;
    createCargoDischarge.chefEscale = this.memberSelected;
    createCargoDischarge.tonnageQtyDechargee = this.totalTonnageQtyDechargee;
    createCargoDischarge.cargoDischargeContaminations = this.cargoDischargeContaminationsList;
    createCargoDischarge.perturbations = this.dischargeInfos.get('perturbations')?.value;
    createCargoDischarge.dischargeQuantities = this.dischargedQuantitiesList;

    
    
    console.error('createCargoDischarge ====> ', createCargoDischarge)

    

    this.dechargementService.createCargoDischarge(createCargoDischarge).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error(error);
    })

    // console.error(this.dischargedQuantitiesList)
    // console.warn(this.cargoDischargeContaminationsList)
    // console.warn(this.dischargeInfos.get('perturbations')?.value)
  }

  addDischargedQty(){
    let dischargedQty: DischargeQuantity = new DischargeQuantity();
    dischargedQty.id = ++this.indexdischargedQuantitiesList;
    this.dischargedQuantitiesList.push(dischargedQty);
    
  }

  deleteDischargedQty(dischargedQty: DischargeQuantity){
    let element_index = 0;
    let new_element: any = this.dischargedQuantitiesList.find((el: any, index: any) => {
      element_index = index;
      return el.id === dischargedQty.id;
    });
    this.dischargedQuantitiesList.splice (element_index, 1);
  }

  objectComparisonFunction ( option: any, value: any ) : boolean {
    return option.id === value.id;
  }

  getMembersByShiftOrderAndShiftDate(){
    
    let shiftOrder = this.dischargeInfos.get('shiftOrder')?.value;
    let shiftDate = moment(this.dischargeInfos.get('shiftDate')?.value).format('YYYY-MM-DD');

    console.warn('shiftOrder => ', shiftOrder)
    console.warn('shiftDate => ', shiftDate)

    this.isLoading = true;
    this.dechargementService.getMembersByShift(shiftOrder, shiftDate).subscribe((data) => {

      console.log('Response => ', data)

      this.chefsEscaleList = [];
      this.operateursList = [];

      data.respModel.filter((m: GetMembersByShiftOrderAndShiftDate) => {
        if(m.member_type_id === 1) {
          
          this.chefsEscaleList.push(m);
        }
        if(m.member_type_id === 2) {
          
          this.operateursList.push(m);
        }
      });

      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      console.error('Error => ', error)
    });
    
  }

  chefEscaleCompare( option: any, value: any ) : boolean {
    return option.shift_member_plan_id === value.shift_member_plan_id;
  }

  addDischargedContamination(){
    let cargoDischargeContamination: CargoDischargeContamination = new CargoDischargeContamination();
    cargoDischargeContamination.id = ++this.indexCargoDischargeContaminationsList;
    this.cargoDischargeContaminationsList.push(cargoDischargeContamination);
    
  }

  deleteDischargedContamination(cargoDischargeContamination: CargoDischargeContamination){
    let element_index = 0;
    let new_element: any = this.cargoDischargeContaminationsList.find((el: any, index: any) => {
      element_index = index;
      return el.id === cargoDischargeContamination.id;
    });
    this.cargoDischargeContaminationsList.splice (element_index, 1);
  }

  

}



























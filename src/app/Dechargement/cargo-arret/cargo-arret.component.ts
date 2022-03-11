import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faCheck, faPlus, faSignature, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { AddCargoOutage } from 'src/app/Models/DTO/add-cargo-outage.model';
import { EquipementView } from 'src/app/Models/View/equipement-view.model';
import { GetMembersByShiftOrderAndShiftDate } from 'src/app/Models/View/get-members-by-shift-order-and-shift-date.model';
import { OutageCausesView } from 'src/app/Models/View/outage-causes-view.model';
import { StaticsData } from 'src/app/Models/View/statics-data.model';
import { DechargementService } from 'src/app/Services/dechargement.service';

@Component({
  selector: 'app-cargo-arret',
  templateUrl: './cargo-arret.component.html',
  styleUrls: ['./cargo-arret.component.css']
})
export class CargoArretComponent implements OnInit {


  isLoading: boolean = false;
  isUpdate: boolean = false;
  arretsFG!: FormGroup;

  operateursList: GetMembersByShiftOrderAndShiftDate[] = [];
  memberSelected!: GetMembersByShiftOrderAndShiftDate;

  equipementGroupesList: EquipementView[] = [];
  equipementCategoriesList: EquipementView[] = [];
  equipementsList: EquipementView[] = [];
  equipementSelected!: EquipementView;

  outageTypesList: OutageCausesView[] = [];
  outageCategoriesesList: OutageCausesView[] = [];
  outageCausesList: OutageCausesView[] = [];
  outageSelected!: OutageCausesView;
  

  outagesList: AddCargoOutage[] = [];
  indexOutagesList: number = 0;

  displayedColumns: string[] = [
    'equipement',
    'cause',
    'from',
    'to',
    'total',
    'observation',
    'actions',
  ];

  // icons
  faPlus = faPlus;
  faTrash = faTrash;
  faSignature = faSignature;
  faCheck = faCheck;

  constructor(@Inject(MAT_DIALOG_DATA) public dischargeData: any, private _formBuilder: FormBuilder, private dechargementService: DechargementService) { }

  ngOnInit(): void {

    let staticsData: StaticsData = JSON.parse(
      localStorage.getItem('staticsData') || '{}'
    );
    if (staticsData) {
      this.equipementGroupesList = staticsData.equipements;
      this.equipementCategoriesList = staticsData.equipements;
      this.equipementsList = staticsData.equipements;

      console.error(staticsData.outageCauses);
      this.outageTypesList = staticsData.outageCauses;
      this.outageCategoriesesList = staticsData.outageCauses;
      this.outageCausesList = staticsData.outageCauses;
    }

    this.arretsFG = this._formBuilder.group({
      shiftDate: ['', Validators.required],
      shiftOrder: ['', Validators.required],
      debut: ['', Validators.required],
      fin: ['', Validators.required],
      observation: ['', Validators.required],
      equipmentGroupId: ['', Validators.required],
      equipmentCategoryId: ['', Validators.required],
      equipementId: ['', Validators.required],
      causeId: ['', Validators.required],
      categoryId: ['', Validators.required],
      typeId: ['', Validators.required],
    });
  }

  

  getMembersByShiftOrderAndShiftDate(){
    
    let shiftOrder = this.arretsFG.get('shiftOrder')?.value;
    let shiftDate = moment(this.arretsFG.get('shiftDate')?.value).format('YYYY-MM-DD');

    console.warn('shiftOrder => ', shiftOrder)
    console.warn('shiftDate => ', shiftDate)

    this.isLoading = true;
    this.dechargementService.getMembersByShift(shiftOrder, shiftDate).subscribe((data) => {

      console.log('Response => ', data)

      this.operateursList = [];

      data.respModel.filter((m: GetMembersByShiftOrderAndShiftDate) => {
        if(m.member_type_id === 2) this.operateursList.push(m);
      });

      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      console.error('Error => ', error)
    });
    
  }

  operatorCompare( option: any, value: any ) : boolean {
    return option.shift_member_plan_id === value.shift_member_plan_id;
  }

  groupeEquipementCompare( option: any, value: any ) : boolean {
    return option.equipmentGroupId === value.equipmentGroupId;
  }

  categoryEquipementCompare( option: any, value: any ) : boolean {
    return option.equipmentCategoryId === value.equipmentCategoryId;
  }

  equipementCompare( option: any, value: any ) : boolean {
    return option.equipementId === value.equipementId;
  }

  categoryTypeCompare( option: any, value: any ) : boolean {
    return option.type_id === value.type_id;
  }

  outageCauseCompare( option: any, value: any ) : boolean {
    return option.cause_id === value.cause_id;
  }

  outageGategoryCompare( option: any, value: any ) : boolean {
    return option.category_id === value.category_id;
  }

  valider(){
    
    this.dechargementService.createCargoOutages(this.outagesList).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error(error);
    })

  }

  addCargoOutage() {
    let addCargoOutage: AddCargoOutage = new AddCargoOutage();

    addCargoOutage.activityId = 1;
    addCargoOutage.cargoId = this.dischargeData.discharge.cargoId;
    addCargoOutage.outageCause = this.outageSelected; 
    addCargoOutage.operateur = this.memberSelected; 
    addCargoOutage.startDate = moment(this.arretsFG.get('shiftDate')?.value).format('YYYY-MM-DD');
    addCargoOutage.endDate = moment(this.arretsFG.get('shiftDate')?.value).format('YYYY-MM-DD');
    addCargoOutage.equipement = this.equipementSelected;
    addCargoOutage.observation = this.arretsFG.get('observation')?.value;

    const newOutagesList = this.outagesList;
    newOutagesList.push(addCargoOutage);
    this.outagesList = [...newOutagesList]; //refresh the dataSource
  }

  deleteCargoOutage(addCargoOutage: AddCargoOutage) {
    let element_index = 0;
    let new_element: any = this.outagesList.find(
      (el: any, index: any) => {
        element_index = index;
        return el.id === addCargoOutage.id;
      }
    );

    const newOutagesList = this.outagesList;
    newOutagesList.splice(element_index, 1);
    this.outagesList = [...newOutagesList]; //refresh the dataSource
  }

  getEquipementsCategories(){
    let equipmentGroupId = this.arretsFG.get('equipmentGroupId')?.value;

    console.error('inside getEquipementsCategories => ', equipmentGroupId)

    this.equipementCategoriesList = [];

    this.equipementGroupesList.filter((eg: EquipementView) => {
        if(eg.equipmentGroupId === equipmentGroupId) this.equipementCategoriesList.push(eg);
      });
  }

  getEquipements(){
    let equipmentCategoryId = this.arretsFG.get('equipmentCategoryId')?.value;

    console.error('inside getEquipements => ', equipmentCategoryId)

    this.equipementsList = [];

    this.equipementCategoriesList.filter((eg: EquipementView) => {
        if(eg.equipmentCategoryId === equipmentCategoryId) this.equipementsList.push(eg);
      });
  }

  calcTotalTime(
    startTime: string,
    endTime: string
  ) {
    let startDate = moment(this.arretsFG.get('shiftDate')?.value).format('YYYY-MM-DD');
    let oStart = new Date(startDate + 'T' + startTime + ':00.000');
    let oEnd = new Date(startDate + 'T' + endTime + ':00.000');
    let start = moment(oStart);
    let end = moment(oEnd);
    let totalMinutes = end.diff(start, 'minutes');
    let totalHours = Math.floor(totalMinutes / 60) + ':' + (totalMinutes % 60);
    return totalHours;
  }

  updateCargoOutage(addCargoOutage: AddCargoOutage){

  }

}


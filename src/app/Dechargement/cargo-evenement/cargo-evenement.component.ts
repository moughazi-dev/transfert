import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  faPlus,
  faTrash,
  faSignature,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { AddCargoEvent } from 'src/app/Models/DTO/add-cargo-event.model';
import { Evenement } from 'src/app/Models/evenement.model';
import { GetMembersByShiftOrderAndShiftDate } from 'src/app/Models/View/get-members-by-shift-order-and-shift-date.model';
import { StaticsData } from 'src/app/Models/View/statics-data.model';
import { DechargementService } from 'src/app/Services/dechargement.service';

@Component({
  selector: 'app-cargo-evenement',
  templateUrl: './cargo-evenement.component.html',
  styleUrls: ['./cargo-evenement.component.css'],
})
export class CargoEvenementComponent implements OnInit {
  evenementFG!: FormGroup;

  dischargeEventsList: AddCargoEvent[] = [];
  indexDischargeEventsList: number = 0;

  evenementsList: Evenement[] = [];

  operatorsList: GetMembersByShiftOrderAndShiftDate[] = [];

  displayedColumns: string[] = [
    'event',
    'from',
    'to',
    'total',
    'observation',
    'actions',
  ];

  isUpdate: boolean = false;
  toUpdateCargoEvent!: AddCargoEvent;

  // icons
  faPlus = faPlus;
  faTrash = faTrash;
  faSignature = faSignature;
  faCheck = faCheck;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dischargeData: any,
    private dechargementService: DechargementService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getMembersByShiftOrderAndShiftDate();
    let staticsData: StaticsData = JSON.parse(
      localStorage.getItem('staticsData') || '{}'
    );
    if (staticsData) {
      this.evenementsList = staticsData.events;
    }

    this.evenementFG = this._formBuilder.group({
      shiftOrder: ['', Validators.required],
      operateur: ['', Validators.required],
      evenement: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      observation: ['', Validators.required],
    });
  }

  addCargoEvent() {
    let addCargoEvent: AddCargoEvent = new AddCargoEvent();

    addCargoEvent.id = ++this.indexDischargeEventsList;
    addCargoEvent.cargoId = this.dischargeData.discharge.cargoId;
    addCargoEvent.shiftOrder = this.evenementFG.get('shiftOrder')?.value;
    addCargoEvent.operateur = this.evenementFG.get('operateur')?.value;
    addCargoEvent.evenement = this.evenementFG.get('evenement')?.value;
    addCargoEvent.startDate = moment(
      this.evenementFG.get('startDate')?.value
    ).format('YYYY-MM-DD');
    addCargoEvent.endDate = moment(
      this.evenementFG.get('endDate')?.value
    ).format('YYYY-MM-DD');
    addCargoEvent.startTime = this.evenementFG.get('startTime')?.value;
    addCargoEvent.endTime = this.evenementFG.get('endTime')?.value;
    addCargoEvent.observation = this.evenementFG.get('observation')?.value;

    const newdischargeEventsList = this.dischargeEventsList;
    newdischargeEventsList.push(addCargoEvent);
    this.dischargeEventsList = [...newdischargeEventsList]; //refresh the dataSource
  }

  updateCargoEvent(updateCargoEvent: AddCargoEvent) {
    this.isUpdate = true;
    this.toUpdateCargoEvent = updateCargoEvent;
    
    this.evenementFG.get('shiftOrder')?.setValue(updateCargoEvent.shiftOrder);
    this.evenementFG.get('operateur')?.setValue(updateCargoEvent.operateur);
    this.evenementFG.get('evenement')?.setValue(updateCargoEvent.evenement);
    this.evenementFG.get('startDate')?.setValue(updateCargoEvent.startDate);
    this.evenementFG.get('endDate')?.setValue(updateCargoEvent.endDate);
    this.evenementFG.get('startTime')?.setValue(updateCargoEvent.startTime);
    this.evenementFG.get('endTime')?.setValue(updateCargoEvent.endTime);
    this.evenementFG.get('observation')?.setValue(updateCargoEvent.observation);
  }

  submitUpdateCargoEvent() {
    console.error('inside submitUpdateCargoEvent  => ', this.toUpdateCargoEvent.id)
    // if (this.toUpdateCargoEvent.id) {
      let element_index = 0;
      let new_element: any = this.dischargeEventsList.find(
        (el: any, index: any) => {
          element_index = index;
          return el.id === this.toUpdateCargoEvent.id;
        }
      );

      

      new_element.shiftOrder = this.evenementFG.get('shiftOrder')?.value;
      new_element.operateur = this.evenementFG.get('operateur')?.value;
      new_element.evenement = this.evenementFG.get('evenement')?.value;
      new_element.startDate = moment(
        this.evenementFG.get('startDate')?.value
      ).format('YYYY-MM-DD');
      new_element.endDate = moment(
        this.evenementFG.get('endDate')?.value
      ).format('YYYY-MM-DD');
      new_element.startTime = this.evenementFG.get('startTime')?.value;
      new_element.endTime = this.evenementFG.get('endTime')?.value;
      new_element.observation = this.evenementFG.get('observation')?.value;

      console.error('new_element index => ', element_index)
      console.error('new_element => ', new_element)

      const newdischargeEventsList = this.dischargeEventsList;
      newdischargeEventsList[element_index] = new_element;
      this.dischargeEventsList = [...newdischargeEventsList]; //refresh the dataSource

      this.isUpdate = false;
      this.toUpdateCargoEvent.id = 0;
    // }
  }

  deleteCargoEvent(addCargoEvent: AddCargoEvent) {
    let element_index = 0;
    let new_element: any = this.dischargeEventsList.find(
      (el: any, index: any) => {
        element_index = index;
        return el.id === addCargoEvent.id;
      }
    );

    const newdischargeEventsList = this.dischargeEventsList;
    newdischargeEventsList.splice(element_index, 1);
    this.dischargeEventsList = [...newdischargeEventsList]; //refresh the dataSource
  }

  objectComparisonFunction(option: any, value: any): boolean {
    return option.id === value.id;
  }

  getMembersByShiftOrderAndShiftDate() {
    this.dechargementService.getOperators().subscribe(
      (data) => {
        console.log('Response => ', data);
        this.operatorsList = data.respModel;
      },
      (error) => {
        console.error('Error => ', error);
      }
    );
  }

  validerAddEvents() {
    // console.log(this.dischargeEventsList);

    this.dechargementService.createCargoEvenets(this.dischargeEventsList).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error(error);
    })
    
  }

  calcTotalTime(
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string
  ) {
    let oStart = new Date(startDate + 'T' + startTime + ':00.000');
    let oEnd = new Date(endDate + 'T' + endTime + ':00.000');
    let start = moment(oStart);
    let end = moment(oEnd);
    let totalMinutes = end.diff(start, 'minutes');
    let totalHours = Math.floor(totalMinutes / 60) + ':' + (totalMinutes % 60);
    return totalHours;
  }
}

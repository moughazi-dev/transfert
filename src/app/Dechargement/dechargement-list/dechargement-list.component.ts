import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { faFileSignature, faTruckLoading, faBan, faCalendarPlus, 
          faHourglassEnd, faBusinessTime, faClipboardCheck, faPlayCircle, faList } from '@fortawesome/free-solid-svg-icons';
import { Cargo } from 'src/app/Models/cargo.model';
import { Discharge } from 'src/app/Models/View/discharge.model';
import { Navire } from 'src/app/Models/View/navire.model';
import { DechargementService } from 'src/app/Services/dechargement.service';
import { CargoArretComponent } from '../cargo-arret/cargo-arret.component';
import { CargoEvenementComponent } from '../cargo-evenement/cargo-evenement.component';
import { CommencerDechargementComponent } from '../commencer-dechargement/commencer-dechargement.component';
import { DebutDechargementComponent } from '../debut-dechargement/debut-dechargement.component';
import { DechargementVerificationComponent } from '../dechargement-verification/dechargement-verification.component';
import { FinDechargementComponent } from '../fin-dechargement/fin-dechargement.component';
import { ValidationDechargementComponent } from '../validation-dechargement/validation-dechargement.component';

@Component({
  selector: 'app-dechargement-list',
  templateUrl: './dechargement-list.component.html',
  styleUrls: ['./dechargement-list.component.css']
})
export class DechargementListComponent implements OnInit {

  isLoading: boolean = false;

  ////////////////////////////////////////////////
  formGroup!: FormGroup;
  //////////////////////////////////////////////

  displayedColumns: string[] = [
    'navire',
    'contrat',
    'client',
    'bl',
    'discharged_quantity',
    'actions',
  ];

  dataSource: Discharge[] = [];

  // Pagination data
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];

  // icons
  faFileSignature = faFileSignature;
  faTruckLoading = faTruckLoading;
  faBan = faBan;
  faCalendarPlus = faCalendarPlus;
  faHourglassEnd = faHourglassEnd;
  faBusinessTime = faBusinessTime;
  faClipboardCheck = faClipboardCheck;
  faPlayCircle = faPlayCircle;
  faList = faList;

  constructor(private fb:FormBuilder, private dechargementService: DechargementService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDischargePlans(10, 0);

    this.formGroup = this.fb.group({
      nom:[''],
      contract:['']
    })
  }

  //debut///////////////////////////////////////////////////////
  searchNavireByContratAndByNom(size: number, page: number){
    this.dechargementService.getCargoDischargeViewByNomList(page, size, this.formGroup.value.nom, 
      this.formGroup.value.contract).subscribe((data) => {
      console.log('getCargoDischargeByNom ====> ', data);
      this.dataSource = data.respModel;
      
    }, (error) => {
      console.error('getDischargePlans error ====> ', error);
    });
  }
  ///fin/////////////////////////////////////////////////////
  getDischargePlans(page: number, size: number){
    this.dechargementService.getCargoDischargeViewList(page, size).subscribe((data) => {
      console.warn('getCargoDischarge ====> ', data);
      this.dataSource = data.respModel;
    }, (error) => {
      console.error('getDischargePlans error ====> ', error);
    });
  }

  onChangePaging(pageEvent: PageEvent) {
    this.getDischargePlans(pageEvent.pageSize, 0);
    console.error('PageEvent ===> ', pageEvent);
  }

  createcargoDischarge(discharge: Discharge){
    const dialogRef = this.dialog.open(DebutDechargementComponent, {
      data: {
        discharge: discharge,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  startDischarge(discharge: Discharge){
    const dialogRef = this.dialog.open(CommencerDechargementComponent, {
      data: {
        discharge: discharge,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  addArret(discharge: Discharge){
    const dialogRef = this.dialog.open(CargoArretComponent, {
      data: {
        discharge: discharge,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  addEvent(discharge: Discharge){
    const dialogRef = this.dialog.open(CargoEvenementComponent, {
      data: {
        discharge: discharge,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  createFinShift(discharge: Discharge){

  }

  createFinDechargement(discharge: Discharge){
    const dialogRef = this.dialog.open(FinDechargementComponent, {
      data: {
        discharge: discharge,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  dischargeVerification(discharge: Discharge){
    const dialogRef = this.dialog.open(DechargementVerificationComponent, {
      data: {
        discharge: discharge,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  dischargeValidation(discharge: Discharge){
    const dialogRef = this.dialog.open(ValidationDechargementComponent, {
      data: {
        discharge: discharge,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  

}

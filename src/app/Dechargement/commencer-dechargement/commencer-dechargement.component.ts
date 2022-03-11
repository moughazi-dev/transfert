import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { Cargo } from 'src/app/Models/cargo.model';
import { CreateCargoDischarge } from 'src/app/Models/DTO/create-cargo-discharge.model';
import { StartCargoDischarge } from 'src/app/Models/DTO/start-cargo-discharge.model';
import { DechargementService } from 'src/app/Services/dechargement.service';

@Component({
  selector: 'app-commencer-dechargement',
  templateUrl: './commencer-dechargement.component.html',
  styleUrls: ['./commencer-dechargement.component.css']
})
export class CommencerDechargementComponent implements OnInit {

  navireInfos!: FormGroup;


  constructor(@Inject(MAT_DIALOG_DATA) public dischargeData: any, private _formBuilder: FormBuilder, private dechargementService: DechargementService) { 
    //dischargeData.discharge
  }

  ngOnInit(): void {
    this.navireInfos = this._formBuilder.group({
      nor: ['', Validators.required],
      debutAccostage: ['', Validators.required],
      finAccostage: ['', Validators.required],
      debutDraftSurvey: ['', Validators.required],
      finDraftSurvey: ['', Validators.required],
      debutDechargement: ['', Validators.required],
      deliverCertifLibrePratique: ['', Validators.required],
    });

    this.dechargementService.getCargoById(this.dischargeData.discharge.cargoId).subscribe((data) => {
      console.warn(data.respModel);
      this.navireInfos.get('debutDechargement')?.setValue(data.respModel.dischargeStart);
      this.navireInfos.get('nor')?.setValue(data.respModel.nor);
      this.navireInfos.get('debutAccostage')?.setValue(data.respModel.berthingStart);
      this.navireInfos.get('finAccostage')?.setValue(data.respModel.berthingEnd);
      this.navireInfos.get('debutDraftSurvey')?.setValue(data.respModel.draftSurveyStart);
      this.navireInfos.get('finDraftSurvey')?.setValue(data.respModel.draftSurveyEnd);
      this.navireInfos.get('deliverCertifLibrePratique')?.setValue(data.respModel.certificateDelivery);

    }, (error) => {
      console.error(error);
    });

  }

  commncerDechargement(){
    let startCargoDischarge: StartCargoDischarge = new StartCargoDischarge();

    startCargoDischarge.cargoId = this.dischargeData.discharge.cargoId;
    startCargoDischarge.nor = moment(this.navireInfos.get('nor')?.value).format('YYYY-MM-DD');
    startCargoDischarge.debutAccostage = moment(this.navireInfos.get('debutAccostage')?.value).format('YYYY-MM-DD');
    startCargoDischarge.finAccostage = moment(this.navireInfos.get('finAccostage')?.value).format('YYYY-MM-DD');
    startCargoDischarge.debutDraftSurvey = this.navireInfos.get('debutDraftSurvey')?.value;
    startCargoDischarge.finDraftSurvey = this.navireInfos.get('finDraftSurvey')?.value;
    startCargoDischarge.debutDechargement = moment(this.navireInfos.get('debutDechargement')?.value).format('YYYY-MM-DD');
    startCargoDischarge.deliverCertifLibrePratique = moment(this.navireInfos.get('deliverCertifLibrePratique')?.value).format('YYYY-MM-DD');

    //console.error('this.dischargeData.discharge => ', this.dischargeData.discharge);
    //console.warn('startCargoDischarge => ', startCargoDischarge);


    this.dechargementService.startCargoDischarge(startCargoDischarge).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error(error);
    });

  }
}







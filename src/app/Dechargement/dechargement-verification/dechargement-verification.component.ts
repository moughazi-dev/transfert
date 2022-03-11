import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DischargeVerificationDataDTO } from 'src/app/Models/DTO/discharge-verification-data-dto.model';
import { GetDischargeVerificationData } from 'src/app/Models/View/get-discharge-verification-data.model';
import { DechargementService } from 'src/app/Services/dechargement.service';

@Component({
  selector: 'app-dechargement-verification',
  templateUrl: './dechargement-verification.component.html',
  styleUrls: ['./dechargement-verification.component.css']
})
export class DechargementVerificationComponent implements OnInit {

  dischargeVerificationData: DischargeVerificationDataDTO[] = [];
  dischargeVerificationDataShift!: any;

  constructor(@Inject(MAT_DIALOG_DATA) public dischargeData: any, private dechargementService: DechargementService) { }

  ngOnInit(): void {
    this.getDischargeVerificationData();
  }

  getDischargeVerificationData(){
    this.dechargementService.getDischargeVerificationData(this.dischargeData.discharge.cargoId).subscribe((data) => {
      
      this.dischargeVerificationData = data.respModel;
      console.log(this.dischargeVerificationData)
      // data.respModel.forEach((verificationData: GetDischargeVerificationData) => {
        
      // });
    }, (error) => {
      console.error(error);
    })
  }

}

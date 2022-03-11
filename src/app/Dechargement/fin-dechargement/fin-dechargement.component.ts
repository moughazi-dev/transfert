import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { EndCargoDischarge } from 'src/app/Models/DTO/end-cargo-discharge.model';
import { DechargementService } from 'src/app/Services/dechargement.service';

@Component({
  selector: 'app-fin-dechargement',
  templateUrl: './fin-dechargement.component.html',
  styleUrls: ['./fin-dechargement.component.css']
})
export class FinDechargementComponent implements OnInit {

  navireInfos!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public dischargeData: any, private _formBuilder: FormBuilder, private dechargementService: DechargementService) { }

  ngOnInit(): void {

    this.navireInfos = this._formBuilder.group({
      endDischarge: ['', Validators.required],
      endBulldozer: ['', Validators.required],
      sailingDate: ['', Validators.required],
    });
  }

  validerFinDechargement(){
    let endCargoDischarge: EndCargoDischarge = new EndCargoDischarge();

    endCargoDischarge.cargoId = this.dischargeData.discharge.cargoId;
    endCargoDischarge.endDischarge = moment(this.navireInfos.get('endDischarge')?.value).format('YYYY-MM-DD');
    endCargoDischarge.endBulldozer = moment(this.navireInfos.get('endBulldozer')?.value).format('YYYY-MM-DD');
    endCargoDischarge.sailingDate = moment(this.navireInfos.get('sailingDate')?.value).format('YYYY-MM-DD');

    this.dechargementService.endCargoDischarge(endCargoDischarge).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error(error);
    })
    
  }

}

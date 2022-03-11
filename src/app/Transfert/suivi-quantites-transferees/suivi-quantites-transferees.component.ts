import { Component, OnInit } from '@angular/core';
import { SiloNiveau } from 'src/app/Models/silo.model';
import { TransfertService } from 'src/app/Services/transfert.service';

@Component({
  selector: 'app-suivi-quantites-transferees',
  templateUrl: './suivi-quantites-transferees.component.html',
  styleUrls: ['./suivi-quantites-transferees.component.css']
})
export class SuiviQuantitesTransfereesComponent implements OnInit {

  nbr: number=71;
  silosList!: Array<SiloNiveau>;
  siloPercent = {
    siloA1: 0, siloA2: 0, siloA3: 0, siloA4: 0, siloA5: 0, siloA6: 0,
    siloB1: 0, siloB2: 0, siloB3: 0, siloB4: 0, siloB5: 0, siloB6: 0,
    siloC1: 0, siloC2: 0, siloC3: 0, siloC4: 0, siloC5: 0, siloC6: 0,
    siloD1: 0, siloD2: 0, siloD3: 0, siloD4: 0, siloD5: 0, siloD6: 0,
    siloE1: 0, siloE2: 0
  };
  constructor(private trq: TransfertService) { }

  ngOnInit(): void {
    this.trq.getListNiveauSilos().subscribe(
      data => {
        this.silosList = data.respModel;
        console.log(this.silosList);
        for(let result of this.silosList){
          
          if((result.unitId == 1) && (result.subsystemId == 1)){
            this.siloPercent.siloA1 = 100 - result.amount;
          }else if((result.unitId == 2) && (result.subsystemId == 2)){
            this.siloPercent.siloA2 = 100 - result.amount;
          }else if((result.unitId == 3) && (result.subsystemId == 3)){
            this.siloPercent.siloA3 = 100 - result.amount;
          }else if((result.unitId == 4) && (result.subsystemId == 4)){
            this.siloPercent.siloA4 = 100 - result.amount;
          }else if((result.unitId == 5) && (result.subsystemId == 5)){
            this.siloPercent.siloA5 = 100 - result.amount;
          }else if((result.unitId == 6) && (result.subsystemId == 6)){
            this.siloPercent.siloA6 = 100 - result.amount;
          }

          else if((result.unitId == 1) && (result.subsystemId == 7)){
            this.siloPercent.siloB1 = 100 - result.amount;
          }else if((result.unitId == 2) && (result.subsystemId == 8)){
            this.siloPercent.siloB2 = 100 - result.amount;
          }else if((result.unitId == 3) && (result.subsystemId == 9)){
            this.siloPercent.siloB3 = 100 - result.amount;
          }else if((result.unitId == 4) && (result.subsystemId == 10)){
            this.siloPercent.siloB4 = 100 - result.amount;
          }else if((result.unitId == 5) && (result.subsystemId == 11)){
            this.siloPercent.siloB5 = 100 - result.amount;
          }else if((result.unitId == 6) && (result.subsystemId == 12)){
            this.siloPercent.siloB6 = 100 - result.amount;
          }

          else if((result.unitId == 1) && (result.subsystemId == 13)){
            this.siloPercent.siloC1 = 100 - result.amount;
          }else if((result.unitId == 2) && (result.subsystemId == 14)){
            this.siloPercent.siloC2 = 100 - result.amount;
          }else if((result.unitId == 3) && (result.subsystemId == 15)){
            this.siloPercent.siloC3 = 100 - result.amount;
          }else if((result.unitId == 4) && (result.subsystemId == 16)){
            this.siloPercent.siloC4 = 100 - result.amount;
          }else if((result.unitId == 5) && (result.subsystemId == 17)){
            this.siloPercent.siloC5 = 100 - result.amount;
          }else if((result.unitId == 6) && (result.subsystemId == 18)){
            this.siloPercent.siloC6 = 100 - result.amount;
          }

          else if((result.unitId == 1) && (result.subsystemId == 19)){
            this.siloPercent.siloD1 = 100 - result.amount;
          }else if((result.unitId == 2) && (result.subsystemId == 20)){
            this.siloPercent.siloD2 = 100 - result.amount;
          }else if((result.unitId == 3) && (result.subsystemId == 21)){
            this.siloPercent.siloD3 = 100 - result.amount;
          }else if((result.unitId == 4) && (result.subsystemId == 22)){
            this.siloPercent.siloD4 = 100 - result.amount;
          }else if((result.unitId == 5) && (result.subsystemId == 23)){
            this.siloPercent.siloD5 = 100 - result.amount;
          }else if((result.unitId == 6) && (result.subsystemId == 24)){
            this.siloPercent.siloD6 = 100 - result.amount;
          }

          else if((result.unitId == 1) && (result.subsystemId == 25)){
            this.siloPercent.siloE1 = 100 - result.amount;
          }else if((result.unitId == 2) && (result.subsystemId == 26)){
            this.siloPercent.siloE2 = 100 - result.amount;
          }
          
        }
      }
    )  
  }

}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFileSignature, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { FilterPrHebdomadaire } from 'src/app/Models/DTO/filter-pr-hebdomadaire.model';
import { TransfertService } from 'src/app/Services/transfert.service';

@Component({
  selector: 'app-programme-hebdomadaire',
  templateUrl: './programme-hebdomadaire.component.html',
  styleUrls: ['./programme-hebdomadaire.component.css']
})

export class ProgrammeHebdomadaireComponent implements OnInit {

  formGroup!: FormGroup;
  formSaisie!: FormGroup;
  dialogRef:any;
  dialogRefComm:any;

  faTimesCircle = faTimesCircle;
  faFileSignature = faFileSignature;
  faPlusCircle = faPlusCircle;

  Days:number =0;
  unite = "";

  thereIsData = false;
  isUnite1or2 = false;

  dataEx: dataExt[] = [];
  listDate: any[] = [];
  constructor(private fb:FormBuilder, private service: TransfertService) { }

  ngOnInit(): void { 
    this.formGroup = this.fb.group
    ({
      dateDebut:['', Validators.required],
      dateFin:['', Validators.required],
      clientUnite:['', Validators.required]
    });

    this.formSaisie = this.fb.group({
      options:this.fb.array([])
    });

  }

  newOption(): FormGroup {  
    return this.fb.group({  
      date:['', Validators.required],

      cargoA:['', Validators.required],
      cargoB:['', Validators.required],
      cargoC:['', Validators.required],
      cargoD:['', Validators.required],
      cargoE:['', Validators.required],

      unite:[this.unite, Validators.required],

      siloA:['silo1', Validators.required],
      siloB:['silo2', Validators.required],
      siloC:['silo3', Validators.required],
      siloD:['silo4', Validators.required],
      siloE:['silo5', Validators.required],

      comment:[''] 
    })  
  } 
  options() : FormArray {  
    return this.formSaisie.get("options") as FormArray ;
  }

  AddOption(){ 
    this.options().push(this.newOption()); 
  }

  search(){
    if(this.thereIsData == true){
      this.options().clear();
    }
    this.Days=this.CalculeDays(this.formGroup.value.dateDebut, this.formGroup.value.dateFin);
    var splitted = this.formGroup.value.clientUnite.replace(/ /g, '').split("-", 2);
    this.unite = splitted[1];
    
    this.service.programmeHebdomadaire(splitted[0]).subscribe(
      data =>{
        this.dataEx = data.respModel;
        this.listDate = this.fdateRange(this.formGroup.value.dateDebut, this.formGroup.value.dateFin);
        for(let i=0; i<this.Days; i++){
          this.AddOption();
        }   
        this.thereIsData = true;
      }
    )
    
  }

  CalculeDays(day1: string, day2: string){
    var date1 = new Date(day1); 
	  var date2 = new Date(day2);  
    var Time = date2.getTime() - date1.getTime(); 
    return (Time / (1000 * 3600 * 24))+1;
  }
  fdateRange(startDate: string, endDate: string, steps = 1) {
    const dateArray = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= new Date(endDate)) {
      var current = new Date(currentDate);
      dateArray.push(moment(current).format("DD/MM/YYYY"));
      // Use UTC date to prevent problems with time zones and DST
      currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
    return dateArray;
  }
  
  EnregistrerPrimary(){
    this.service.programmeHebdomadairePrimary(this.formSaisie.value).subscribe(
      data=>{
        console.log(data);
      }
    );
  }
    
}

interface dataExt {
  "cargoId": number,
  "consumerId": string,
  "externalId": string,
  "id": number,
  "vessel": string
}


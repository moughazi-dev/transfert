import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFileSignature, faPlus, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Silo } from 'src/app/Models/silo.model';
import { Unit } from 'src/app/Models/unit.model';
import { TransfertService } from 'src/app/Services/transfert.service';

@Component({
  selector: 'app-quantites-transferees',
  templateUrl: './quantites-transferees.component.html',
  styleUrls: ['./quantites-transferees.component.css']
})
export class QuantitesTransfereesComponent implements OnInit {

  quantiteTransfereFormGroup!: FormGroup; 
  faTimesCircle = faTimesCircle;
  faFileSignature = faFileSignature;
  faPlusCircle = faPlusCircle;

  ListUnits:Array<Unit>=[]
  ListSilos:Array<Silo>=[]
  
  constructor(private fb: FormBuilder, private trq: TransfertService) {

    this.quantiteTransfereFormGroup = this.fb.group({
      date:['',Validators.required],
      shift:['',Validators.required],
      options:this.fb.array([])
    }); 
    
   }

  ngOnInit(): void { 
    this.AddOption();
    this.units();  
  }

  options() : FormArray {  
    return this.quantiteTransfereFormGroup.get("options") as FormArray ;
  }

  units(){
    return this.trq.getListUnit().subscribe(
      (data)=>{
        this.ListUnits =data.respModel;
      }
    )
  }

  getSilos(event:any){
    return this.trq.getListSilos(event.value).subscribe(
      (data)=>{
        this.ListSilos = data.respModel;
        console.log(this.ListSilos);
      }
    )
  }
 
  newOption(): FormGroup {  
    return this.fb.group({  
      unite_id:['',Validators.required], 
      heureDebut:['',Validators.required], 
      heureFin:['',Validators.required], 
      silo:['',Validators.required], 
      quantite:['',Validators.required]  
    })  
  } 

  AddOption(){ 
    this.options().push(this.newOption()); 
  }

  removeOption(i:number) {  
    this.options().removeAt(i);  
  }

  onSubmit() {
    this.trq.postQuantite(this.quantiteTransfereFormGroup.value).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }    
  

}

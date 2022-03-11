import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransfertService } from 'src/app/Services/transfert.service';

@Component({
  selector: 'app-saisie-niveaux-silos',
  templateUrl: './saisie-niveaux-silos.component.html',
  styleUrls: ['./saisie-niveaux-silos.component.css']
})
export class SaisieNiveauxSilosComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private fb:FormBuilder, private trq: TransfertService) {
    this.formGroup=this.fb.group({
      date:['',Validators.required],
      shift:['',Validators.required],

      siloA1:['',Validators.required],
      siloA2:['',Validators.required],
      siloA3:['',Validators.required],
      siloA4:['',Validators.required],
      siloA5:['',Validators.required],
      siloA6:['',Validators.required],

      siloB1:['',Validators.required],
      siloB2:['',Validators.required],
      siloB3:['',Validators.required],
      siloB4:['',Validators.required],
      siloB5:['',Validators.required],
      siloB6:['',Validators.required],

      siloC1:['',Validators.required],
      siloC2:['',Validators.required],
      siloC3:['',Validators.required],
      siloC4:['',Validators.required],
      siloC5:['',Validators.required],
      siloC6:['',Validators.required],

      siloD1:['',Validators.required],
      siloD2:['',Validators.required],
      siloD3:['',Validators.required],
      siloD4:['',Validators.required],
      siloD5:['',Validators.required],
      siloD6:['',Validators.required],

      siloE1:['',Validators.required],
      siloE2:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.trq.postNiveauSilo(this.formGroup.value).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  } 

}

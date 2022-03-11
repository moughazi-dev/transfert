import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DocumentCategory } from 'src/app/Models/document-category.model';
import { StaticsData } from 'src/app/Models/View/statics-data.model';
import { faCheck, faPlus, faSignature, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DechargementService } from 'src/app/Services/dechargement.service';
import { DocumentData } from 'src/app/Models/DTO/document-data.model';
import * as moment from 'moment';
import { MatAccordion } from '@angular/material/expansion';
import { Cargo } from 'src/app/Models/cargo.model';

@Component({
  selector: 'app-validation-dechargement',
  templateUrl: './validation-dechargement.component.html',
  styleUrls: ['./validation-dechargement.component.css']
})
export class ValidationDechargementComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  documentCategoriesList: DocumentCategory[] = [];
  documentSelected!: DocumentCategory;

  documentsList: DocumentData[] = [];
  indexDocumentList: number = 0;

  validationDechargementFG!: FormGroup;

  isUpdate: boolean = false;
  isLoading: boolean = false;

  displayedColumns: string[] = [
    'date',
    'name',
    'type',
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
      this.documentCategoriesList = staticsData.documentCategories;
    }

    this.validationDechargementFG = this._formBuilder.group({
      validation: ['', Validators.required],

      document: ['', Validators.required],

      nor: ['', Validators.required],
      debutAccostage: ['', Validators.required],
      finAccostage: ['', Validators.required],
      debutDraftSurvey: ['', Validators.required],
      finDraftSurvey: ['', Validators.required],
      debutDechargement: ['', Validators.required],
      deliverCertifLibrePratique: ['', Validators.required],

      endDischarge: ['', Validators.required],
      endBulldozer: ['', Validators.required],
      sailingDate: ['', Validators.required],
    });

    this.dechargementService.getCargoById(this.dischargeData.discharge.cargoId).subscribe((data) => {
      if(data.respModel){
        this.validationDechargementFG.get('nor')?.setValue(data.respModel.nor);
        this.validationDechargementFG.get('debutAccostage')?.setValue(data.respModel.berthingStart);
        this.validationDechargementFG.get('finAccostage')?.setValue(data.respModel.berthingEnd);
        this.validationDechargementFG.get('debutDraftSurvey')?.setValue(data.respModel.draftSurveyStart);
        this.validationDechargementFG.get('finDraftSurvey')?.setValue(data.respModel.draftSurveyEnd);
        this.validationDechargementFG.get('debutDechargement')?.setValue(data.respModel.dischargeStart);
        this.validationDechargementFG.get('deliverCertifLibrePratique')?.setValue(data.respModel.certificateDelivery);
        this.validationDechargementFG.get('endDischarge')?.setValue(data.respModel.dischargeEnd);
        this.validationDechargementFG.get('endBulldozer')?.setValue(data.respModel.bulldozerEnd);
        this.validationDechargementFG.get('sailingDate')?.setValue(data.respModel.sailingDate);
      }
    }, (error) => {

    })
    
  }

  

  addDocument(){
    let file = this.validationDechargementFG.get('document')?.value;
    if(file){
      let documentData: DocumentData = new DocumentData();
      documentData.id = ++this.indexDocumentList;
      documentData.file = file._files[0];
      documentData.type_file = this.documentSelected;
      documentData.file_name = file._fileNames;
      documentData.date = moment().format('YYYY-MM-DD');

      const newdocumentsList = this.documentsList;
      newdocumentsList.push(documentData);
      this.documentsList = [...newdocumentsList]; //refresh the dataSource
    }
    
    

    console.log(this.validationDechargementFG.get('document')?.value)
  }

  updateDocument(document: DocumentCategory){

  }

  deleteDocument(document: DocumentCategory){

  }

  valider(){
    console.log(this.documentsList)

    const formData: FormData = new FormData();

    this.documentsList.forEach((document:DocumentData) => {
      formData.append('file', document.file);
    });

    let cargo: any = {};
    cargo.Id = this.dischargeData.discharge.cargoId;
    cargo.validation1Id = 1;
    cargo.nor = moment(this.validationDechargementFG.get('nor')?.value).format('YYYY-MM-DD');
    cargo.berthingStart = moment(this.validationDechargementFG.get('debutAccostage')?.value).format('YYYY-MM-DD');
    cargo.berthingEnd = moment(this.validationDechargementFG.get('finAccostage')?.value).format('YYYY-MM-DD');
    cargo.draftSurveyStart = this.validationDechargementFG.get('debutDraftSurvey')?.value
    cargo.draftSurveyEnd = this.validationDechargementFG.get('finDraftSurvey')?.value
    cargo.dischargeStart = moment(this.validationDechargementFG.get('debutDechargement')?.value).format('YYYY-MM-DD');
    cargo.dischargeEnd = moment(this.validationDechargementFG.get('endDischarge')?.value).format('YYYY-MM-DD');
    cargo.certificateDelivery = moment(this.validationDechargementFG.get('deliverCertifLibrePratique')?.value).format('YYYY-MM-DD');
    cargo.bulldozerEnd = moment(this.validationDechargementFG.get('endBulldozer')?.value).format('YYYY-MM-DD');
    cargo.sailingDate = moment(this.validationDechargementFG.get('sailingDate')?.value).format('YYYY-MM-DD');

    console.warn('Cargo data ====== ', cargo)
    

    formData.append('documents_data', JSON.stringify(this.documentsList));
    formData.append('cargo_data', JSON.stringify(cargo));

    this.dechargementService.createCargoDocuments(formData).subscribe((data) => {
      console.log(data)
    }, (error) => {
      console.error(error)
    });
    
  }

  documentCompare( option: any, value: any ) : boolean {
    return option.id === value.id;
  }

}

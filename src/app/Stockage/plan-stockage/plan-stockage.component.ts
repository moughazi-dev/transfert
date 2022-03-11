import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { faFileSignature, faTruckLoading, faPlus } from '@fortawesome/free-solid-svg-icons';
import { GuiColumn, GuiPaging, GuiPagingDisplay } from '@generic-ui/ngx-grid';
import * as moment from 'moment';
import { CargoSync } from 'src/app/Models/cargo-sync.model';
import { Cargo } from 'src/app/Models/cargo.model';
import { Navire } from 'src/app/Models/View/navire.model';
import { EventService } from 'src/app/Services/event.service';
import { StaticsService } from 'src/app/Services/statics-service.service';
import { StockageService } from 'src/app/Services/stockage.service';
import { SaisirPlanStockageComponent } from '../saisir-plan-stockage/saisir-plan-stockage.component';

@Component({
  selector: 'app-plan-stockage',
  templateUrl: './plan-stockage.component.html',
  styleUrls: ['./plan-stockage.component.css'],
})
export class PlanStockageComponent implements OnInit {
  isLoading: boolean = false;

  // filter
  fourchette!: number;
  eta: FormControl = new FormControl(moment());
  contrat: string = '';

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  displayedColumns: string[] = [
    'vessel',
    'origin',
    'contrat',
    'consumer',
    'actions',
  ];

  dataSource: Navire[] = [];

  // Pagination data
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];

  // icons
  faFileSignature = faFileSignature;
  faTruckLoading = faTruckLoading;
  faPlus = faPlus;

  showSaisirCargodata: boolean = false;

  constructor(
    private stockageService: StockageService,
    private staticsService: StaticsService,
    private eventService: EventService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {

    this.getNavire(this.length, this.pageSize);
    this.getNavireCount(this.length, this.pageSize);
  }

  getNaviretTest() {
    this.isLoading = true;
    this.stockageService.getCargos().subscribe(
      (data) => {
        console.log('Cargos List => ', data);
        //this.dataSource = data;
        if (!data.length) this.showSaisirCargodata = true;
        let navireData: Navire[] = [];
        data.map((cargo: Cargo) => {
          console.log('cargoSync => ', cargo);
          let navire: Navire = new Navire();
          //(navire.cargo_id = cargo.id), // a voir
            //navire.consumer = cargo.consumer_id;
            (navire.contrat = cargo.cargo_contract);
          //navire.vessel = cargo.vessel;

          navireData.push(navire);
        });
        this.dataSource = navireData;
        // else
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.showSaisirCargodata = true;
      }
    );
  }

  getNavire(page: number, size: number) {

    console.error('search data Start => ', this.range.value.start);

    // console.error('search data Start => ', moment(this.range.value.start).format('YYYY-MM-DD'));
    // console.error('search data End => ', moment(this.range.value.end).format('YYYY-MM-DD'));
    // console.error('search data Contract => ', this.contrat);

    let searchdata = {
      externalId: this.contrat,
      fromDate: this.range.value.start ? moment(this.range.value.start).format('YYYY-MM-DD') : null,
      toDate: this.range.value.end ? moment(this.range.value.end).format('YYYY-MM-DD') : null,
      port: null,
      page: page,
      size: size,
    };

    this.isLoading = true;
    this.stockageService.getCargoValueNavires(searchdata).subscribe(
      (data) => {
        console.log('Cargos List => ', data);

        let navireData: Navire[] = [];
        navireData = data.respModel.cargoValueNavires;
        this.dataSource = navireData;
        // else
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.showSaisirCargodata = true;
      }
    );
  }

  getNavireCount(page: number, size: number){
    let searchdata = {
      externalId: this.contrat,
      fromDate: this.range.value.start ? moment(this.range.value.start).format('YYYY-MM-DD') : null,
      toDate: this.range.value.end ? moment(this.range.value.end).format('YYYY-MM-DD') : null,
      port: null,
      page: page,
      size: size,
    };

    this.stockageService.getCargoValueNaviresCount(searchdata).subscribe(
      (data) => {
        console.log('Cargos List Count => ', data);
        this.length = data.respModel;
      },
      (error) => {
      }
    );
  }

  saisiePlanStockage(navire: Navire, updateDischargePlan: boolean) {
    const dialogRef = this.dialog.open(SaisirPlanStockageComponent, {
      data: {
        navire: navire,
        updateDischargePlan: updateDischargePlan,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  onChangePaging(pageEvent: PageEvent) {
    console.log('PageEvent ===> ', pageEvent);
    this.getNavire(pageEvent.pageIndex, pageEvent.pageSize);
    this.getNavireCount(0, pageEvent.pageSize);
  }

  getStatics() {
    this.isLoading = true;
    this.staticsService.getConsumers().subscribe(
      (data) => {
        console.log('Consumers List => ', data);
        if (data) localStorage.setItem('consumers_list', JSON.stringify(data));
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  searchNavire(page: number, size: number) {
    this.getNavire(0, size);
    this.getNavireCount(0, size);
  }

  getNavireData(page: number, size: number) {
    this.getNavire(page, size);
    this.getNavireCount(0, size);
  }
}



        
        
        
        
import { Component, OnInit } from '@angular/core';
import { StockageService } from 'src/app/Services/stockage.service';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-plan-stockage-list',
  templateUrl: './plan-stockage-list.component.html',
  styleUrls: ['./plan-stockage-list.component.css']
})
export class PlanStockageListComponent implements OnInit {

  isLoading: boolean = false;

  displayedColumns: string[] = [
    'vessel',
    'contrat',
    'laycanjl',
    'client',
    'tas',
    'zone',
    'bl',
  ];

  dataSource: any[] = [];

  // Pagination data
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];

  // icons
  faFileSignature = faFileSignature;

  constructor(private stockageService: StockageService) { }

  ngOnInit(): void {
    this.getDischargePlans(10, 0);
  }

  getDischargePlans(page: number, size: number){
    this.stockageService.getDischargePlansViewList(page, size).subscribe((data) => {
      console.warn('getDischargePlans ====> ', data);
      this.dataSource = data.respModel;
    }, (error) => {
      console.error('getDischargePlans error ====> ', error);
    });
  }

  onChangePaging(pageEvent: PageEvent) {
    console.log('PageEvent ===> ', pageEvent);
  }


}

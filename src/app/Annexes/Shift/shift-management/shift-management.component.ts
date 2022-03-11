import { Component, OnInit } from '@angular/core';
import { ShiftDetails } from 'src/app/Models/DTO/shift-details.model';

@Component({
  selector: 'app-shift-management',
  templateUrl: './shift-management.component.html',
  styleUrls: ['./shift-management.component.css']
})
export class ShiftManagementComponent implements OnInit {

  shiftDetailsList: ShiftDetails[]= [];
  indexShiftDetailsList: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addShiftDetails(){
    let shiftDetails: ShiftDetails = new ShiftDetails();
    shiftDetails.id = ++this.indexShiftDetailsList;
    this.shiftDetailsList.push(shiftDetails);
  }

  deleteShiftDetails(shiftDetails: ShiftDetails){
    let element_index = 0;
    let new_element: any = this.shiftDetailsList.find((el: any, index: any) => {
      element_index = index;
      return el.id === shiftDetails.id;
    });
    this.shiftDetailsList.splice (element_index, 1);
  }

}

import { Component, OnInit } from '@angular/core';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { faSpellCheck } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { StaticsService } from './Services/statics-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TAQA-Dechargement';

  constructor(
    private staticsService: StaticsService,
  ) {}
  ngOnInit(): void {
    this.getStaticsData();
  }

  

  faFileSignature = faFileSignature;
  faFileInvoice = faFileInvoice;
  faGlobeAfrica = faGlobeAfrica;
  faWarehouse = faWarehouse;
  faFileContract = faFileContract;
  faBox = faBox;
  faBell = faBell;
  faHome = faHome;

  faSpellCheck = faSpellCheck;
  faCogs = faCogs;
  faListOl = faListOl;
  faUsers = faUsers;
  faUser = faUser;
  faPowerOff = faPowerOff;
  faExpandArrowsAlt = faExpandArrowsAlt;
  faBookmark = faBookmark;
  faThumbsUp = faThumbsUp;
  faCalendarAlt = faCalendarAlt;
  faTasks = faTasks;
  faChartBar = faChartBar;
  faTachometerAlt = faTachometerAlt;
  faPaperclip = faPaperclip;
  faTruckLoading = faTruckLoading;
  faExchangeAlt = faExchangeAlt;

  getStaticsData(){
    this.staticsService.getStaticsData().subscribe((data) => {
      console.warn(data.respModel);
      localStorage.setItem('staticsData', JSON.stringify(data.respModel));
    }, (error) => {

    })
  }

}

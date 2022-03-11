import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consumer } from '../Models/consumer.model';
import { StaticsData } from '../Models/View/statics-data.model';
import { Constants } from '../Utils/constants';
import { ConfigService } from './config-service.service';

@Injectable({
  providedIn: 'root'
})
export class StaticsService {

  apiUrl: string;

  constructor(public http: HttpClient, public configService: ConfigService) { 
    this.apiUrl = configService.config.apiUrl;
  }

  public getConsumers(){
    return this.http.get<Consumer[]>(`${this.apiUrl}/${Constants.GET_CONSUMERS_LIST}`);
  }

  public getStaticsData(){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_STATICS_DATA}`);
  }

  
}

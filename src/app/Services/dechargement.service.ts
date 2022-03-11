import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCargoEvent } from '../Models/DTO/add-cargo-event.model';
import { AddCargoOutage } from '../Models/DTO/add-cargo-outage.model';
import { CreateCargoDischarge } from '../Models/DTO/create-cargo-discharge.model';
import { EndCargoDischarge } from '../Models/DTO/end-cargo-discharge.model';
import { StartCargoDischarge } from '../Models/DTO/start-cargo-discharge.model';
import { Constants } from '../Utils/constants';
import { ConfigService } from './config-service.service';

@Injectable({
  providedIn: 'root'
})
export class DechargementService {

  apiUrl: string;

  constructor(public http: HttpClient, public configService: ConfigService) { 
    this.apiUrl = configService.config.apiUrl;
  }

  //debut/////////////////////////////////////////////////////
  public getCargoDischargeViewByNomList(size: number, page: number, nom: string, contrat: string){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_CARGO_DISCHARGE_VIEW_BY_NOM_LIST}?page=${page}&size=${size}&nom=${nom}&contrat=${contrat}`);
  }
  ///fin///////////////////////////////////////////////////
  public getCargoDischargeViewList(size: number, page: number){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_CARGO_DISCHARGE_VIEW_LIST}?page=${page}&size=${size}`);
  }

  public getCargoById(cargoId: number){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_CARGO_BY_ID}?cargoId=${cargoId}`);
  }

  public startCargoDischarge(startCargoDischarge: StartCargoDischarge){
    return this.http.post<any>(`${this.apiUrl}/${Constants.START_CARGO_DISCHARGE}`, startCargoDischarge);
  }

  public getMembersByShift(shiftOrder: number, date: string){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_MEMBERS_BY_SHIFT}?shiftOrder=${shiftOrder}&date=${date}`);
  }

  public getOperators(){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_OPERATORS}`);
  }

  public createCargoDischarge(createCargoDischarge: CreateCargoDischarge){
    return this.http.post<any>(`${this.apiUrl}/${Constants.CREATE_CARGO_DISCHARGE}`, createCargoDischarge);
  }

  public endCargoDischarge(endCargoDischarge: EndCargoDischarge){
    return this.http.post<any>(`${this.apiUrl}/${Constants.END_CARGO_DISCHARGE}`, endCargoDischarge);
  }

  public createCargoEvenets(addCargoEvents: AddCargoEvent[]){
    return this.http.post<any>(`${this.apiUrl}/${Constants.CREATE_CARGO_EVENTS}`, addCargoEvents);
  }

  public createCargoOutages(addCargoOutages: AddCargoOutage[]){
    return this.http.post<any>(`${this.apiUrl}/${Constants.CREATE_CARGO_OUTAGES}`, addCargoOutages);
  }

  public createCargoDocuments(filesData: any){
    return this.http.post<any>(`${this.apiUrl}/${Constants.CREATE_CARGO_DOCUMENTS}`, filesData);
  }
  
  public getDischargeVerificationData(cargoId: number){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_DISCHARGE_VERIFICATION}?cargoId=${cargoId}`);
  }
  
}

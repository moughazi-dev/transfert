import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../Models/cargo.model';
import { ConfigService } from './config-service.service';
import { Constants } from './../Utils/constants';
import { LoadingPort } from '../Models/loading-port.model';
import { CargoSync } from '../Models/cargo-sync.model';
import { CreateCargoSyncDTO } from '../Models/DTO/create-cargo-sync-dto.model';
import { CreateDischargePlan } from '../Models/DTO/create-discharge-plan.model';
import { Zone } from 'src/app/Models/zone.model';

@Injectable({
  providedIn: 'root'
})
export class StockageService {

  apiUrl: string;

  constructor(public http: HttpClient, public configService: ConfigService) { 
    this.apiUrl = configService.config.apiUrl;
  }

  public getCargoSyncs(){
    return this.http.get<CargoSync[]>(`${this.apiUrl}/${Constants.POST_CARGO_SYNC}`);
  }

  public getCargos(){
    return this.http.get<Cargo[]>(`${this.apiUrl}/${Constants.GET_NAVIRES_LIST}`);
  }

  

  public createLoadingPort(loadingPort: LoadingPort){
    return this.http.post<LoadingPort>(`${this.apiUrl}/${Constants.POST_LOADING_PORT}`, loadingPort);
  }

  public createCargoSync(createCargoSyncDTO: CreateCargoSyncDTO){
    return this.http.post<any>(`${this.apiUrl}/${Constants.POST_CARGO_SYNC}`, createCargoSyncDTO);
  }

  public createCargo(cargo: Cargo){
    return this.http.post<Cargo>(`${this.apiUrl}/${Constants.GET_NAVIRES_LIST}`, cargo);
  }


  public getCargoValueNavires(searchData: any){
    return this.http.post<any>(`${this.apiUrl}/${Constants.GET_CARGO_VALUE_NAVIRES_LIST}`, searchData);
  }

  public getCargoValueNaviresCount(searchData: any){
    return this.http.post<any>(`${this.apiUrl}/${Constants.GET_CARGO_VALUE_NAVIRES_LIST_COUNT}`, searchData);
  }

  public createCargoDischargePlan(createDischargePlan: CreateDischargePlan){
    return this.http.post<any>(`${this.apiUrl}/${Constants.CREATE_DISCHARGE_PLAN}`, createDischargePlan);
  }

  public getDischargePlansViewList(size: number, page: number){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_DISCHARGE_PLAN_LIST}?page=${page}&size=${size}`);
  }

  public getCargoDischargePlanZoneList(cargoId: number){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_CARGO_DISCHARGE_PLAN_ZONES_LIST}?cargoId=${cargoId}`);
  }
  
  public updatedCargoDischargePlans(DischargePlans: any){
    return this.http.post<any>(`${this.apiUrl}/${Constants.UPDATE_CARGO_DISCHARGE_PLANS}`, DischargePlans);
  }
  
}

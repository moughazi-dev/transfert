import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../Utils/constants';
import { ConfigService } from './config-service.service';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  apiUrl: string;

  constructor(public http: HttpClient, public configService: ConfigService) { 
    this.apiUrl = configService.config.apiUrl;
  }

  public getListUnit(){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_UNITS}`);
  }
  public getListSilos(unite_id:number){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_SILOS}/${unite_id}`);
  }
  public getListNiveauSilos(){
    return this.http.get<any>(`${this.apiUrl}/${Constants.GET_NIVEAU_SILOS}`);
  }
  public postQuantite(qtData: any){
    return this.http.post<any>(`${this.apiUrl}/${Constants.SAISIE_TRANSFER_QUANTITE}`, qtData);
  }
  public postNiveauSilo(siloData: any){
    return this.http.post<any>(`${this.apiUrl}/${Constants.NIVEAU_SILO}`, siloData);
  }
  public programmeHebdomadaire(dt: any){
    return this.http.get<any>(`${this.apiUrl}/${Constants.PROGRAMME_HEBDOMADAIRE}?dt=${dt}`);
  }
  public programmeHebdomadairePrimary(qtData: any){
    return this.http.post<any>(`${this.apiUrl}/${Constants.PROGRAMME_HEBDOMADAIRE_PRIMARY}`, qtData);
  }
}

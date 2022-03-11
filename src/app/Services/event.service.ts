import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getNaviresEvent = new EventEmitter();

  notifyGetNaviresEvent(){
    this.getNaviresEvent.emit();
  }
}

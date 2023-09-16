import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameIdentifierService {

  indexSelected = new BehaviorSubject('NIFTY');

  constructor() { }

}

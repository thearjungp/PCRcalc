import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// export interface ReceivedData
// {
//   "data": Array<Object>;
//   "CE" : Object;
//   "PE" :  Object;

// }

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  constructor(private httpClient: HttpClient) { }

  loadCountTriggerVariable = new BehaviorSubject("a");

  API = "http://localhost:4444/api/v1/"
  // API = "/api/v1/"

  getDataOfSymbol(symbol: string)
  {
    // return this.httpClient.get('/api/v1/fetchdata/' + symbol)
    return this.httpClient.get(this.API + "fetchdata/" +  symbol)
  }

  fetchSingleData(symbol:string)
  {
    return this.httpClient.get(this.API + "fetchsingledata/" + symbol)
  }

  clearDatabase()
  {
    return this.httpClient.delete(this.API + "/dropdatabase")
  }

}

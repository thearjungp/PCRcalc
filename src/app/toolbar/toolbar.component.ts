import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PcrloggerComponent } from '../pcrlogger/pcrlogger.component';
import { DataFetcherService } from '../services/data-fetcher.service';
import { NameIdentifierService } from '../services/name-identifier.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title=""
  totalCEChange = 0
  totalPEChange = 0
  PECERatio:any = 0
  NIFTYCurrentValue = 0
  BANKNIFTYCurrentValue = 0

  constructor(private nameIdentifierService: NameIdentifierService,private dataFetcherService : DataFetcherService, public router: Router) { }

  ngOnInit(): void {
    this.nameIdentifierService.indexSelected.subscribe((name) => {
      this.title = name
      this.loadData()
    })
    this.dataFetcherService.loadCountTriggerVariable.subscribe((val) =>  this.loadData())
    this.loadData()
    setInterval(() => this.loadData(), 60000)
  }

  loadData()
  {
    this.dataFetcherService.getDataOfSymbol(this.title).subscribe(
      (res:any) => {

        if(res.length > 0)
        {
          let firstTotalCE = res[0]['totalCE']
          let latestTotalCE = res[res.length-1]['totalCE']

          let firstTotalPE = res[0]['totalPE']
          let latestTotalPE = res[res.length-1]['totalPE']

          this.totalCEChange = latestTotalCE - firstTotalCE;
          this.totalPEChange = latestTotalPE - firstTotalPE;
        }

      }
    )

    setTimeout(() => {
      this.PECERatio = (Math.floor(this.totalPEChange / this.totalCEChange * 1000) /1000).toFixed(2);

    }, 500)  
  }

  fetchManual()
  {
    this.dataFetcherService.fetchSingleData(this.title).subscribe((res:any) => {
      setTimeout(() => this.dataFetcherService.loadCountTriggerVariable.next(this.dataFetcherService.loadCountTriggerVariable.getValue() + " a"), 500)

      // this.dataFetcherService.loadCountTriggerVariable.next(this.dataFetcherService.loadCountTriggerVariable.getValue() + " a"); 
      
      setTimeout(() => {
        this.loadData()
      }, 600)

    });
  }

  clearDatabase()
  {
    this.dataFetcherService.clearDatabase().subscribe((res: any) => {
      this.dataFetcherService.loadCountTriggerVariable.next(this.dataFetcherService.loadCountTriggerVariable.getValue() +  " a"); 
    })
  }

}

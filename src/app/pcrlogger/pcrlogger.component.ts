import { ClassMethod } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DataFetcherService } from '../services/data-fetcher.service';
import { NameIdentifierService } from '../services/name-identifier.service';

export interface SingleRecord {
  time: string;
  totalCE: number;
  changeInCE: number;
  totalPE: any;
  changeInPE: number;
  pcr: string;
  ltp: number;
}

const ELEMENT_DATA: SingleRecord[] = [
  // {time: '12:15', totalCE: 50000, changeInCE: 0, totalPE: 100000, changeInPE: 0, pcr: '2', ltp: 33000},

];


@Component({
  selector: 'app-pcrlogger',
  templateUrl: './pcrlogger.component.html',
  styleUrls: ['./pcrlogger.component.css']
})
export class PcrloggerComponent implements OnInit {

  index = '';
  displayedColumns: string[] = ['time', 'totalCE', 'changeInCE', 'totalPE', 'changeInPE', 'pcr', 'ltp']
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable)
  table!: MatTable<SingleRecord>;

  constructor(private nameIdentifierService : NameIdentifierService, private dataFetcherService : DataFetcherService) { }

  ngOnInit(): void {
    this.nameIdentifierService.indexSelected.subscribe((index) => {
      this.index = index
      this.loadData()
    })
    this.dataFetcherService.loadCountTriggerVariable.subscribe((val) =>  this.loadData()
    )
    this.loadData()
    setInterval(() => this.loadData(), 60000)
    
  }


  loadData()
  {
    this.dataFetcherService.getDataOfSymbol(this.index).subscribe(
      (res :any) => {

        let fulldat = res

        for(let i=0; i<fulldat.length; i++)
        {
          if(i==0)
          {
            fulldat[i]['changeInCE'] = 0
            fulldat[i]['changeInPE'] = 0
          }
          else
          {
            fulldat[i]['changeInCE'] = fulldat[i]['totalCE'] - fulldat[i-1]['totalCE']
            fulldat[i]['changeInPE'] = fulldat[i]['totalPE'] - fulldat[i-1]['totalPE']
          }

          


          let d = new Date(fulldat[i]['time'])
          let dArray = d.toLocaleTimeString().split(':');
          let hour = dArray[0];
          let min = dArray[1];
          
          // fulldat[i]['time'] = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
          fulldat[i]['time'] = hour + ":" + min;
        }


        // this.newRecord.time = d.toLocaleDateString() + "  " + d.toLocaleTimeString()

        // fulldat.map((b:SingleRecord) => {
        //   this.dataSource.push(b)
        // })
        this.dataSource = fulldat


        this.table.renderRows();

        // console.log(this.dataSource)

        

      }
    )
  }

}

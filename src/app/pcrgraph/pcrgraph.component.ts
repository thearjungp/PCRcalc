import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataFetcherService } from '../services/data-fetcher.service';
import { NameIdentifierService } from '../services/name-identifier.service';
import { darkTheme, lightTheme } from './themes';
import {
  ChartOptions,
  createChart,
  DeepPartial,
  UTCTimestamp,
} from 'lightweight-charts';

@Component({
  selector: 'app-pcrgraph',
  templateUrl: './pcrgraph.component.html',
  styleUrls: ['./pcrgraph.component.css'],
})
export class PcrgraphComponent implements OnInit, AfterViewInit {
  @ViewChild('lwchart') chartElement!: ElementRef;
  index = '';
  chart: any;
  lineSeries: any;
  themesData = {
    Dark: darkTheme,
    Light: lightTheme,
  };

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  tempData: any = [];

  data: any = [];

  constructor(
    private nameIdentifierService: NameIdentifierService,
    private dataFetcherService: DataFetcherService
  ) {}

  ngAfterViewInit(): void {
    window.addEventListener('resize', () => {
      let thewidth = window.innerWidth;
      let theheight = window.innerHeight;
      this.displayChart(thewidth, theheight);
    });
    this.displayChart(window.innerWidth, window.innerHeight);
  }

  displayChart(cwidth: number, cheight: number) {
    this.chart = createChart(this.chartElement.nativeElement, {
      width: cwidth,
      height: cheight,
      rightPriceScale: {
        borderVisible: true,
      },
      timeScale: {
        borderVisible: true,
        timeVisible: true,
        secondsVisible: false,
      },
      autoSize: true,
    });

    this.lineSeries = this.chart.addAreaSeries({
      topColor: 'rgba(33, 150, 243, 0.56)',
      bottomColor: 'rgba(33, 150, 243, 0.04)',
      lineColor: 'rgba(33, 150, 243, 1)',
      lineWidth: 2,
    });

    this.syncToTheme('Dark');
  }

  ngOnInit(): void {
    this.nameIdentifierService.indexSelected.subscribe((index) => {
      this.index = index;
      // this.loadData();
      setTimeout(() => this.loadData(), 500);
      // Object.assign(this, this.data)
    });

    this.dataFetcherService.loadCountTriggerVariable.subscribe((val) => {
      // this.loadData();
      setTimeout(() => this.loadData(), 500);
    });

    this.loadData();
    setInterval(() => this.loadData(), 60000);
  }

  loadData() {
    this.tempData = [];
    this.dataFetcherService
      .getDataOfSymbol(this.index)
      .subscribe((res: any) => {
        let fulldat = res;
        let series = fulldat.map((rec: any) => {

          const zonedTime = new Date(rec['time']).valueOf()/1000
          
          let d = zonedTime + 19800;


          return { time: d, value: parseFloat(rec['pcr']) };
        });

        let name = this.index;
        this.data = series;
        // console.log(this.data)
        this.lineSeries.setData(this.data);
      });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  syncToTheme(theme: String) {
    this.chart.applyOptions(
      this.themesData['Dark'].chart as DeepPartial<ChartOptions>
    );
    this.lineSeries.applyOptions(this.themesData['Dark'].series);
  }
}

import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../services/data-fetcher.service';

@Component({
  selector: 'app-stockconfig',
  templateUrl: './stockconfig.component.html',
  styleUrls: ['./stockconfig.component.css']
})
export class StockconfigComponent implements OnInit {

  mapi = [
    {
        "name": "NIFTY",
        "enabled": false
    },
    {
        "name": "BANKNIFTY",
        "enabled": false
    },
    {
        "name": "FINNIFTY",
        "enabled": false
    },
    {
        "name": "MIDCPNIFTY",
        "enabled": false
    },
    {
        "name": "AARTIIND",
        "enabled": false
    },
    {
        "name": "ABB",
        "enabled": false
    },
    {
        "name": "ABBOTINDIA",
        "enabled": false
    },
    {
        "name": "ABCAPITAL",
        "enabled": false
    },
    {
        "name": "ABFRL",
        "enabled": false
    },
    {
        "name": "ACC",
        "enabled": false
    },
    {
        "name": "ADANIENT",
        "enabled": false
    },
    {
        "name": "ADANIPORTS",
        "enabled": false
    },
    {
        "name": "ALKEM",
        "enabled": false
    },
    {
        "name": "AMBUJACEM",
        "enabled": false
    },
    {
        "name": "APOLLOHOSP",
        "enabled": false
    },
    {
        "name": "APOLLOTYRE",
        "enabled": false
    },
    {
        "name": "ASHOKLEY",
        "enabled": false
    },
    {
        "name": "ASIANPAINT",
        "enabled": false
    },
    {
        "name": "ASTRAL",
        "enabled": false
    },
    {
        "name": "ATUL",
        "enabled": false
    },
    {
        "name": "AUBANK",
        "enabled": false
    },
    {
        "name": "AUROPHARMA",
        "enabled": false
    },
    {
        "name": "AXISBANK",
        "enabled": false
    },
    {
        "name": "BAJAJ-AUTO",
        "enabled": false
    },
    {
        "name": "BAJAJFINSV",
        "enabled": false
    },
    {
        "name": "BAJFINANCE",
        "enabled": false
    },
    {
        "name": "BALKRISIND",
        "enabled": false
    },
    {
        "name": "BALRAMCHIN",
        "enabled": false
    },
    {
        "name": "BANDHANBNK",
        "enabled": false
    },
    {
        "name": "BANKBARODA",
        "enabled": false
    },
    {
        "name": "BATAINDIA",
        "enabled": false
    },
    {
        "name": "BEL",
        "enabled": false
    },
    {
        "name": "BERGEPAINT",
        "enabled": false
    },
    {
        "name": "BHARATFORG",
        "enabled": false
    },
    {
        "name": "BHARTIARTL",
        "enabled": false
    },
    {
        "name": "BHEL",
        "enabled": false
    },
    {
        "name": "BIOCON",
        "enabled": false
    },
    {
        "name": "BOSCHLTD",
        "enabled": false
    },
    {
        "name": "BPCL",
        "enabled": false
    },
    {
        "name": "BRITANNIA",
        "enabled": false
    },
    {
        "name": "BSOFT",
        "enabled": false
    },
    {
        "name": "CANBK",
        "enabled": false
    },
    {
        "name": "CANFINHOME",
        "enabled": false
    },
    {
        "name": "CHAMBLFERT",
        "enabled": false
    },
    {
        "name": "CHOLAFIN",
        "enabled": false
    },
    {
        "name": "CIPLA",
        "enabled": false
    },
    {
        "name": "COALINDIA",
        "enabled": false
    },
    {
        "name": "COFORGE",
        "enabled": false
    },
    {
        "name": "COLPAL",
        "enabled": false
    },
    {
        "name": "CONCOR",
        "enabled": false
    },
    {
        "name": "COROMANDEL",
        "enabled": false
    },
    {
        "name": "CROMPTON",
        "enabled": false
    },
    {
        "name": "CUB",
        "enabled": false
    },
    {
        "name": "CUMMINSIND",
        "enabled": false
    },
    {
        "name": "DABUR",
        "enabled": false
    },
    {
        "name": "DALBHARAT",
        "enabled": false
    },
    {
        "name": "DEEPAKNTR",
        "enabled": false
    },
    {
        "name": "DELTACORP",
        "enabled": false
    },
    {
        "name": "DIVISLAB",
        "enabled": false
    },
    {
        "name": "DIXON",
        "enabled": false
    },
    {
        "name": "DLF",
        "enabled": false
    },
    {
        "name": "DRREDDY",
        "enabled": false
    },
    {
        "name": "EICHERMOT",
        "enabled": false
    },
    {
        "name": "ESCORTS",
        "enabled": false
    },
    {
        "name": "EXIDEIND",
        "enabled": false
    },
    {
        "name": "FEDERALBNK",
        "enabled": false
    },
    {
        "name": "GAIL",
        "enabled": false
    },
    {
        "name": "GLENMARK",
        "enabled": false
    },
    {
        "name": "GMRINFRA",
        "enabled": false
    },
    {
        "name": "GNFC",
        "enabled": false
    },
    {
        "name": "GODREJCP",
        "enabled": false
    },
    {
        "name": "GODREJPROP",
        "enabled": false
    },
    {
        "name": "GRANULES",
        "enabled": false
    },
    {
        "name": "GRASIM",
        "enabled": false
    },
    {
        "name": "GUJGASLTD",
        "enabled": false
    },
    {
        "name": "HAL",
        "enabled": false
    },
    {
        "name": "HAVELLS",
        "enabled": false
    },
    {
        "name": "HCLTECH",
        "enabled": false
    },
    {
        "name": "HDFC",
        "enabled": false
    },
    {
        "name": "HDFCAMC",
        "enabled": false
    },
    {
        "name": "HDFCBANK",
        "enabled": false
    },
    {
        "name": "HDFCLIFE",
        "enabled": false
    },
    {
        "name": "HEROMOTOCO",
        "enabled": false
    },
    {
        "name": "HINDALCO",
        "enabled": false
    },
    {
        "name": "HINDCOPPER",
        "enabled": false
    },
    {
        "name": "HINDPETRO",
        "enabled": false
    },
    {
        "name": "HINDUNILVR",
        "enabled": false
    },
    {
        "name": "IBULHSGFIN",
        "enabled": false
    },
    {
        "name": "ICICIBANK",
        "enabled": false
    },
    {
        "name": "ICICIGI",
        "enabled": false
    },
    {
        "name": "ICICIPRULI",
        "enabled": false
    },
    {
        "name": "IDEA",
        "enabled": false
    },
    {
        "name": "IDFC",
        "enabled": false
    },
    {
        "name": "IDFCFIRSTB",
        "enabled": false
    },
    {
        "name": "IEX",
        "enabled": false
    },
    {
        "name": "IGL",
        "enabled": false
    },
    {
        "name": "INDHOTEL",
        "enabled": false
    },
    {
        "name": "INDIACEM",
        "enabled": false
    },
    {
        "name": "INDIAMART",
        "enabled": false
    },
    {
        "name": "INDIGO",
        "enabled": false
    },
    {
        "name": "INDUSINDBK",
        "enabled": false
    },
    {
        "name": "INDUSTOWER",
        "enabled": false
    },
    {
        "name": "INFY",
        "enabled": false
    },
    {
        "name": "INTELLECT",
        "enabled": false
    },
    {
        "name": "IOC",
        "enabled": false
    },
    {
        "name": "IPCALAB",
        "enabled": false
    },
    {
        "name": "IRCTC",
        "enabled": false
    },
    {
        "name": "ITC",
        "enabled": false
    },
    {
        "name": "JINDALSTEL",
        "enabled": false
    },
    {
        "name": "JKCEMENT",
        "enabled": false
    },
    {
        "name": "JSWSTEEL",
        "enabled": false
    },
    {
        "name": "JUBLFOOD",
        "enabled": false
    },
    {
        "name": "KOTAKBANK",
        "enabled": false
    },
    {
        "name": "L&TFH",
        "enabled": false
    },
    {
        "name": "LALPATHLAB",
        "enabled": false
    },
    {
        "name": "LAURUSLABS",
        "enabled": false
    },
    {
        "name": "LICHSGFIN",
        "enabled": false
    },
    {
        "name": "LT",
        "enabled": false
    },
    {
        "name": "LTIM",
        "enabled": false
    },
    {
        "name": "LTTS",
        "enabled": false
    },
    {
        "name": "LUPIN",
        "enabled": false
    },
    {
        "name": "M&M",
        "enabled": false
    },
    {
        "name": "M&MFIN",
        "enabled": false
    },
    {
        "name": "MANAPPURAM",
        "enabled": false
    },
    {
        "name": "MARICO",
        "enabled": false
    },
    {
        "name": "MARUTI",
        "enabled": false
    },
    {
        "name": "MCDOWELL-N",
        "enabled": false
    },
    {
        "name": "MCX",
        "enabled": false
    },
    {
        "name": "METROPOLIS",
        "enabled": false
    },
    {
        "name": "MFSL",
        "enabled": false
    },
    {
        "name": "MGL",
        "enabled": false
    },
    {
        "name": "MOTHERSON",
        "enabled": false
    },
    {
        "name": "MPHASIS",
        "enabled": false
    },
    {
        "name": "MRF",
        "enabled": false
    },
    {
        "name": "MUTHOOTFIN",
        "enabled": false
    },
    {
        "name": "NATIONALUM",
        "enabled": false
    },
    {
        "name": "NAUKRI",
        "enabled": false
    },
    {
        "name": "NAVINFLUOR",
        "enabled": false
    },
    {
        "name": "NESTLEIND",
        "enabled": false
    },
    {
        "name": "NMDC",
        "enabled": false
    },
    {
        "name": "NTPC",
        "enabled": false
    },
    {
        "name": "OBEROIRLTY",
        "enabled": false
    },
    {
        "name": "OFSS",
        "enabled": false
    },
    {
        "name": "ONGC",
        "enabled": false
    },
    {
        "name": "PAGEIND",
        "enabled": false
    },
    {
        "name": "PEL",
        "enabled": false
    },
    {
        "name": "PERSISTENT",
        "enabled": false
    },
    {
        "name": "PETRONET",
        "enabled": false
    },
    {
        "name": "PFC",
        "enabled": false
    },
    {
        "name": "PIDILITIND",
        "enabled": false
    },
    {
        "name": "PIIND",
        "enabled": false
    },
    {
        "name": "PNB",
        "enabled": false
    },
    {
        "name": "POLYCAB",
        "enabled": false
    },
    {
        "name": "POWERGRID",
        "enabled": false
    },
    {
        "name": "PVR",
        "enabled": false
    },
    {
        "name": "PVRINOX",
        "enabled": false
    },
    {
        "name": "RAIN",
        "enabled": false
    },
    {
        "name": "RAMCOCEM",
        "enabled": false
    },
    {
        "name": "RBLBANK",
        "enabled": false
    },
    {
        "name": "RECLTD",
        "enabled": false
    },
    {
        "name": "RELIANCE",
        "enabled": false
    },
    {
        "name": "SAIL",
        "enabled": false
    },
    {
        "name": "SBICARD",
        "enabled": false
    },
    {
        "name": "SBILIFE",
        "enabled": false
    },
    {
        "name": "SBIN",
        "enabled": false
    },
    {
        "name": "SHREECEM",
        "enabled": false
    },
    {
        "name": "SHRIRAMFIN",
        "enabled": false
    },
    {
        "name": "SIEMENS",
        "enabled": false
    },
    {
        "name": "SRF",
        "enabled": false
    },
    {
        "name": "SUNPHARMA",
        "enabled": false
    },
    {
        "name": "SUNTV",
        "enabled": false
    },
    {
        "name": "SYNGENE",
        "enabled": false
    },
    {
        "name": "TATACHEM",
        "enabled": false
    },
    {
        "name": "TATACOMM",
        "enabled": false
    },
    {
        "name": "TATACONSUM",
        "enabled": false
    },
    {
        "name": "TATAMOTORS",
        "enabled": false
    },
    {
        "name": "TATAPOWER",
        "enabled": false
    },
    {
        "name": "TATASTEEL",
        "enabled": false
    },
    {
        "name": "TCS",
        "enabled": false
    },
    {
        "name": "TECHM",
        "enabled": false
    },
    {
        "name": "TITAN",
        "enabled": false
    },
    {
        "name": "TORNTPHARM",
        "enabled": false
    },
    {
        "name": "TRENT",
        "enabled": false
    },
    {
        "name": "TVSMOTOR",
        "enabled": false
    },
    {
        "name": "UBL",
        "enabled": false
    },
    {
        "name": "ULTRACEMCO",
        "enabled": false
    },
    {
        "name": "UPL",
        "enabled": false
    },
    {
        "name": "VEDL",
        "enabled": false
    },
    {
        "name": "VOLTAS",
        "enabled": false
    },
    {
        "name": "WIPRO",
        "enabled": false
    },
    {
        "name": "ZEEL",
        "enabled": false
    },
    {
        "name": "ZYDUSLIFE",
        "enabled": false
    }
  ]

  color = 'warn';


  
  constructor(private dataFetcherService: DataFetcherService) { }

  ngOnInit(): void {
    this.getEnabledStocks()
  }

  getEnabledStocks()
  {
    this.dataFetcherService.getEnabledStocks().subscribe((res: any) => {
      res.map((e:any) => {
        for(let obj of this.mapi)
        {
          if(obj.name == e.symbol)
          {
            obj.enabled = true
          }
        }
      })

    })
  }

  changeDetector(event : any, stockname:any)
  {
    let changeStatusTo = event.checked
    if(changeStatusTo)
    {
      this.dataFetcherService.enableStock(stockname).subscribe((res) => {
        console.log(res)
      })
    }
    else
    {
      this.dataFetcherService.disableStock(stockname).subscribe((res) => {
        console.log(res)
      })
    }
  }



}

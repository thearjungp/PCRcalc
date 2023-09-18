import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IndexSelectorComponent } from './index-selector/index-selector.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { PcrloggerComponent } from './pcrlogger/pcrlogger.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import { MatButtonModule } from '@angular/material/button';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PcrgraphComponent } from './pcrgraph/pcrgraph.component';
import { MatDialogModule } from '@angular/material/dialog';
import { createChart } from 'lightweight-charts';
import { StockconfigComponent } from './stockconfig/stockconfig.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IndexSelectorComponent,
    PcrloggerComponent,
    PcrgraphComponent,
    StockconfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    NgxAutoScrollModule,
    MatButtonModule,
    NgxChartsModule,
    MatListModule,
    MatSlideToggleModule
  ],
  providers: [PcrloggerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PcrgraphComponent } from './pcrgraph/pcrgraph.component';
import { PcrloggerComponent } from './pcrlogger/pcrlogger.component';

const routes: Routes = [
  { 
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'graph', // child route path
        component: PcrgraphComponent // child route component that the router renders
      },
      {
        path: 'data',
        component: PcrloggerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

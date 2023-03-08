import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { Component1Component } from './component1/component1.component';
import { HeaderComponent } from './header/header.component';
import { Route, RouterModule } from '@angular/router';
import { Component2Component } from './component2/component2.component';
import { FormsModule } from '@angular/forms';
import { Component3Component } from './component3/component3.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Service } from './demo2.service';


const routes: Route[] = [
  { path:'', pathMatch:"full", redirectTo: 'component1'},
  { path:'component1', component: Component1Component },
  { path:'component2', component: Component2Component },
  { path:'component3', component: Component3Component },
  { path: 'mainsub', component: MaincomponentComponent},
  { path: 'employee', loadChildren: () => import('./employee/employee.module')
  .then(m => m.EmployeeModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    MaincomponentComponent,
    SubcomponentComponent,
    Demo1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DemoService, Demo2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

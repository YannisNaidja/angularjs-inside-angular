import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {setAngularJSGlobal, UpgradeModule} from '@angular/upgrade/static';
import * as angular from 'angular';
import { angularGanttJsComponent, AngularGanttJsDirective } from './angularJScomponent/angular-gantt-js.directive';

@NgModule({
  declarations: [
    AppComponent,
    AngularGanttJsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  exports:[AngularGanttJsDirective],
  providers: [
    {provide : '$scope' , useExisting: '$rootScope'}
  ],
  entryComponents:[AppComponent]
})
export class AppModule {

  constructor(private upgrade:UpgradeModule){}

  ngDoBootstrap(appRef: ApplicationRef) {
    setAngularJSGlobal(angular);
    
    angular.module('ganttModule', 
    ['gantt', 'gantt.table' , 'gantt.movable' , 'gantt.tooltips'])
    .component('ganttcomp',angularGanttJsComponent)
    
    this.upgrade.bootstrap(document.body, ['ganttModule']);
    appRef.bootstrap(AppComponent);
  }
 }

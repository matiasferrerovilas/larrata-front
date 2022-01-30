import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import { EnvironmentModule } from '../enviromentService/env.module';
import {interceptors} from '../interceptors/interceptors';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EnvironmentModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    ...interceptors
  ]
})
export class HttpModule { }

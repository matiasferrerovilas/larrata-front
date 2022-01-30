import { NgModule } from '@angular/core';
import { EnvServiceProvider } from './env.service.provider';



@NgModule({
  providers: [
    EnvServiceProvider
  ]
})
export class EnvironmentModule { }

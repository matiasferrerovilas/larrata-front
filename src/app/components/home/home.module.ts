import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home-landing/home.component';
import {HomeGruposComponent} from './home-grupos/home-grupos.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeHistoriaComponent } from './home-historia/home-historia.component';
import { HomeContactoComponent } from './home-contacto/home-contacto.component';
import { HomeNosotrosComponent } from './home-nosotros/home-nosotros.component';
import {GruposService} from './home-grupos/services/grupos.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MzdTimelineModule} from "ngx-mzd-timeline";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    HomeComponent,
    HomeGruposComponent,
    HomeLayoutComponent,
    HomeHistoriaComponent,
    HomeContactoComponent,
    HomeNosotrosComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MzdTimelineModule,
    NgxSpinnerModule,
    NgbDropdownModule
  ],
  providers: [
    GruposService
  ]
})
export class HomeModule { }

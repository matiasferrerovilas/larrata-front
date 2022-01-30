import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { AppRoutingModule } from './routing/app.routes';

//SERVICIOS
import { interceptorProvider } from './core/services/interceptors/auth/auth.interceptor';

//COMPONENTES
import { AppComponent } from './app.component';
import { ModalModule } from './core/modals/modal.module';
import { HttpModule } from './core/services/http/http.module';
import { VotacionesComponent } from './components/votaciones/votaciones.component';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import {HomeModule} from './components/home/home.module';
import {LandingModule} from "./core/landing/landing.module";
import {ComponentsModule} from "./components/components.module";



@NgModule({
  declarations: [
    AppComponent,
    VotacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    HomeModule,
    ModalModule,
    ComponentsModule,
    HttpModule,

  ],
  providers: [
    AuthenticationService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginModule} from "./login/login.module";
import {ReglasModule} from "./reglas/reglas.module";
import {MiembrosModule} from "./miembros/miembros.module";
import {PerfilModule} from "./perfil/perfil.module";
import {AdminModule} from "./administrador/admin.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    ReglasModule,
    MiembrosModule,
    PerfilModule,
    AdminModule,
  ]
})
export class ComponentsModule { }

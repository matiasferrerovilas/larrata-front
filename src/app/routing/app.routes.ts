import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login/login.component';
import { AuthGuard } from '../core/guard/auth-guard.guard';
import {HomeLayoutComponent} from '../components/home/home-layout/home-layout.component';
import {MiembrosLayoutComponent} from '../components/miembros/miembros-layout/miembros-layout.component';
import {PerfilLayoutComponent} from '../components/perfil/perfil-layout/perfil-layout.component';
import {LandingLayoutComponent} from "../core/landing/header/landing/landing-layout/landing-layout.component";
import {MainLayoutComponent} from "../core/landing/header/main/main-layout/main-layout.component";
import {ReglasLayoutComponent} from "../components/reglas/reglas-layout/reglas-layout.component";
import {ProfileResolverResolver} from "../core/resolver/profile-resolver.resolver";
import {AdminLayoutComponent} from "../components/administrador/admin-layout/admin-layout.component";

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LandingLayoutComponent, canActivate: [AuthGuard],  resolve:{profile: ProfileResolverResolver},//Ruta cuando no estas logueado
    children: [
      { path: '', component: HomeLayoutComponent },
    ]

  },
  { path: 'index', component: MainLayoutComponent , canActivate: [AuthGuard], resolve:{profile: ProfileResolverResolver},
    children: [
      { path: 'miembros', component: MiembrosLayoutComponent},
      { path: 'perfil', component: PerfilLayoutComponent },
      { path: 'reglas', component: ReglasLayoutComponent },
      //{ path: 'votaciones', component: PerfilComponent },
      { path: 'admin', component: AdminLayoutComponent },
      ]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  providers: [ProfileResolverResolver]
})
export class AppRoutingModule {
}

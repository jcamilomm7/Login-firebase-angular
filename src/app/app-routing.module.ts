import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-dashboard', pathMatch: 'full' },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-recuperar-password', component: RecuperarPasswordComponent },
  { path: 'app-registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'app-verificar-correo', component: VerificarCorreoComponent },
  { path: '**', redirectTo: '/app-dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

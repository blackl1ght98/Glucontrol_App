import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMainComponent } from './pages/main/login-main.component';

const routes: Routes = [
  {
    path: '',
    component: LoginMainComponent,
  },
  {
    path: 'confirm-email/:userId/:token',
    component: LoginMainComponent, // O el componente que maneja la redirección
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

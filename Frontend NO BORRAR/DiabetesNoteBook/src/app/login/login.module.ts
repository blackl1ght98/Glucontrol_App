import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';
import { LoginMainComponent } from './pages/main/login-main.component';
import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [FormComponent, InfoComponent, LoginMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [LoginMainComponent],
})
export class LoginModule implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  userId: number = 0;
  token: string = '';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
      this.token = params['token'];
      console.log(this.token);
    });
  }
}

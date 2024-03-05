import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css'],
})
export class LoginMainComponent {
  title = 'login-GluControl';
  userId: number = 0;
  token: string = '';
  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
      this.token = params['token'];
      console.log(this.token);
    });
  }
}

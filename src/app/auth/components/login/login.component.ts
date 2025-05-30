import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit():void {}

  onLogin(){
    this.authService.login();
    this.router.navigateByUrl('/facesnaps');
  }


}

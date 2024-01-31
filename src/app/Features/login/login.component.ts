import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  login:string = ""
  senha:string = ""
  erro:boolean = false;

  constructor(private router: Router, private service: AppServiceService) { };

  handleLogin() {
    console.log(this.login);

    this.service.login(this.login , this.senha).subscribe((result)=>{
    console.log(result.length);

    if (result.length>0){
    this.router.navigate(["/", "home"]);
    }
    else{

     this.erro = true;

    }
    })
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

constructor(private route: Router){
  
}
goToDashboard(){
  this.route.navigate(['/', 'home'])
}
goToRepresentante(){
  this.route.navigate(['/', 'representantes'])
}
}

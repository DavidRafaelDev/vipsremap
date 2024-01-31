import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/shared/services/app-service.service';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.css']
})
export class RepresentantesComponent implements OnInit {

representantes: any[] = [];

constructor(private service: AppServiceService){

}
  ngOnInit(): void {
  this.getRepresentantes();

  }
  
getRepresentantes(){
  this.service.getRepresentantes().subscribe((result:any)=>{
  this.representantes = result
  console.log(result)

  })

}}  









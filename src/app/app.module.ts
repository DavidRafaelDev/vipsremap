import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Features/dashboard/dashboard.component';
import { LoginComponent } from './Features/login/login.component';
import { MenuComponent } from './Core/menu/menu.component';
import { AddServicoComponent } from './Features/add-servico/add-servico.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'servico', component: AddServicoComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    AddServicoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

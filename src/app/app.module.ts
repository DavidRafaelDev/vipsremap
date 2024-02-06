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
import { RepresentantesComponent } from './Features/representantes/representantes.component';
import { HttpClientModule} from '@angular/common/http';
import { ServicosComponent } from './Features/serviços/servicos.component';
import { UserService } from './Features/user/user.service';
import {ClientesComponent }from './Features/clientes/clientes.component';
import {VeiculosComponent} from './Features/veiculos/veiculos.component';
import {LojaComponent} from './Features/loja/loja.component'
import { ModalAdicionarVeiculoComponent } from './Features/modal-adicionar-veiculo/modal-adicionar-veiculo.component';
import { ModalAdicionarClienteComponent } from './Features/modal-adicionar-cliente/modal-adicionar-cliente-component';
import {ModalAdicionarLojaComponent} from './Features/modal-adicionar-produtoloja/modal-adicionar-produtoloja.component'
import { ModalAdicionarRepresentanteComponent } from './Features/modal-adicionar-representante/modal-adicionar-representante.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'servico', component: AddServicoComponent },
  { path: 'representantes', component: RepresentantesComponent },
  { path: 'servicos', component: ServicosComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'veiculos', component: VeiculosComponent},
  { path: 'loja' , component: LojaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    AddServicoComponent,
    RepresentantesComponent,
    ServicosComponent,
    ClientesComponent,
    VeiculosComponent,
    LojaComponent,
    ModalAdicionarVeiculoComponent,
    ModalAdicionarClienteComponent,
    ModalAdicionarLojaComponent,
    ModalAdicionarRepresentanteComponent

  ],
  imports: [
    
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
    bootstrap: [AppComponent]
})

export class AppModule { }

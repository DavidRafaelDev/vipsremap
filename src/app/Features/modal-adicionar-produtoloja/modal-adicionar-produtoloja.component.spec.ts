import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAdicionarLojaComponent } from './modal-adicionar-produtoloja.component';

describe('ModalAdicionarProdutoComponent', () => {
  let component: ModalAdicionarLojaComponent;
  let fixture: ComponentFixture<ModalAdicionarLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdicionarLojaComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

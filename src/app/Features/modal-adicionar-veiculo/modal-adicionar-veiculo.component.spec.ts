import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarVeiculoComponent } from './modal-adicionar-veiculo.component';

describe('ModalAdicionarProdutoComponent', () => {
  let component: ModalAdicionarVeiculoComponent;
  let fixture: ComponentFixture<ModalAdicionarVeiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdicionarVeiculoComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

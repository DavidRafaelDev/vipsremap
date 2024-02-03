import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarClienteComponent } from './modal-adicionar-cliente-component';

describe('ModalAdicionarProdutoComponent', () => {
  let component: ModalAdicionarClienteComponent;
  let fixture: ComponentFixture<ModalAdicionarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdicionarClienteComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

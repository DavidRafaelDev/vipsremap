import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicoComponent } from './add-servico.component';

describe('AddServicoComponent', () => {
  let component: AddServicoComponent;
  let fixture: ComponentFixture<AddServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddServicoComponent]
    });
    fixture = TestBed.createComponent(AddServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

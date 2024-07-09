import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcCarritoComponent } from './pc-carrito.component';

describe('PcCarritoComponent', () => {
  let component: PcCarritoComponent;
  let fixture: ComponentFixture<PcCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcCarritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

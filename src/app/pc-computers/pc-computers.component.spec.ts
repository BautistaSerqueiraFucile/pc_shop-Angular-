import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcComputersComponent } from './pc-computers.component';

describe('PcComputersComponent', () => {
  let component: PcComputersComponent;
  let fixture: ComponentFixture<PcComputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcComputersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

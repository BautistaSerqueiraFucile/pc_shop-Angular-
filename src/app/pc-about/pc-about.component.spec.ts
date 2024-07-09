import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcAboutComponent } from './pc-about.component';

describe('PcAboutComponent', () => {
  let component: PcAboutComponent;
  let fixture: ComponentFixture<PcAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

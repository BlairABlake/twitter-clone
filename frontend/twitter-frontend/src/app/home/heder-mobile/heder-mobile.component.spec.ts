import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HederMobileComponent } from './heder-mobile.component';

describe('HederMobileComponent', () => {
  let component: HederMobileComponent;
  let fixture: ComponentFixture<HederMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HederMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HederMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

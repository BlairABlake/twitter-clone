import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSmallMobileComponent } from './account-small-mobile.component';

describe('AccountSmallMobileComponent', () => {
  let component: AccountSmallMobileComponent;
  let fixture: ComponentFixture<AccountSmallMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSmallMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSmallMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

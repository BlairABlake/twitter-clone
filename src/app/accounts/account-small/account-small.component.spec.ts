import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSmallComponent } from './account-small.component';

describe('AccountSmallComponent', () => {
  let component: AccountSmallComponent;
  let fixture: ComponentFixture<AccountSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacionpageComponent } from './autorizacionpage.component';

describe('AutorizacionpageComponent', () => {
  let component: AutorizacionpageComponent;
  let fixture: ComponentFixture<AutorizacionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizacionpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

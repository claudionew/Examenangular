import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursilloComponent } from './cursillo.component';

describe('CursilloComponent', () => {
  let component: CursilloComponent;
  let fixture: ComponentFixture<CursilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

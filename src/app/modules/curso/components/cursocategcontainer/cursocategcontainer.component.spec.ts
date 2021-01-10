import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursocategcontainerComponent } from './cursocategcontainer.component';

describe('CursocategcontainerComponent', () => {
  let component: CursocategcontainerComponent;
  let fixture: ComponentFixture<CursocategcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursocategcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursocategcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

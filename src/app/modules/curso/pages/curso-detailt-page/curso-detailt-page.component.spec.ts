import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetailtPageComponent } from './curso-detailt-page.component';

describe('CursoDetailtPageComponent', () => {
  let component: CursoDetailtPageComponent;
  let fixture: ComponentFixture<CursoDetailtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetailtPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetailtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

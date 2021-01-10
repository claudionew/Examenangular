import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorescontainerComponent } from './instructorescontainer.component';

describe('InstructorescontainerComponent', () => {
  let component: InstructorescontainerComponent;
  let fixture: ComponentFixture<InstructorescontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorescontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorescontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

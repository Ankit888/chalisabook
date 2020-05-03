import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanumanComponent } from './hanuman.component';

describe('HanumanComponent', () => {
  let component: HanumanComponent;
  let fixture: ComponentFixture<HanumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

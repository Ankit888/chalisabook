import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurgaComponent } from './durga.component';

describe('DurgaComponent', () => {
  let component: DurgaComponent;
  let fixture: ComponentFixture<DurgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

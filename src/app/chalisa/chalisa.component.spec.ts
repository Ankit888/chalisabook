import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalisaComponent } from './chalisa.component';

describe('ChalisaComponent', () => {
  let component: ChalisaComponent;
  let fixture: ComponentFixture<ChalisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

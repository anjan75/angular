import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GosomewhereComponent } from './gosomewhere.component';

describe('GosomewhereComponent', () => {
  let component: GosomewhereComponent;
  let fixture: ComponentFixture<GosomewhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GosomewhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GosomewhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

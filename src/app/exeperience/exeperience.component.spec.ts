import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeperienceComponent } from './exeperience.component';

describe('ExeperienceComponent', () => {
  let component: ExeperienceComponent;
  let fixture: ComponentFixture<ExeperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

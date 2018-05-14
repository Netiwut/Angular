import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtopComponent } from './otop.component';

describe('OtopComponent', () => {
  let component: OtopComponent;
  let fixture: ComponentFixture<OtopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

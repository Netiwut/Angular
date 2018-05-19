
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavbeComponent } from './my-navbe.component';

describe('MyNavbeComponent', () => {
  let component: MyNavbeComponent;
  let fixture: ComponentFixture<MyNavbeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNavbeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNavbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

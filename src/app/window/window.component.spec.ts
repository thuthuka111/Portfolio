import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WindowHostComponent } from './window.component';

describe('WindowComponent', () => {
  let component: WindowHostComponent;
  let fixture: ComponentFixture<WindowHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebDevComponent } from './web-dev.component';

describe('WebDevComponent', () => {
  let component: WebDevComponent;
  let fixture: ComponentFixture<WebDevComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

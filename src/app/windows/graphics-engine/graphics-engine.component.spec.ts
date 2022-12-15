import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsEngineComponent } from './graphics-engine.component';

describe('GraphicsEngineComponent', () => {
  let component: GraphicsEngineComponent;
  let fixture: ComponentFixture<GraphicsEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

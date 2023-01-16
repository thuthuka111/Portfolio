import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaCardComponent } from './multimedia-card.component';

describe('MultimediaCardComponent', () => {
  let component: MultimediaCardComponent;
  let fixture: ComponentFixture<MultimediaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

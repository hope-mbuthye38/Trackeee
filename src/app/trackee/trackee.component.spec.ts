import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackeeComponent } from './trackee.component';

describe('TrackeeComponent', () => {
  let component: TrackeeComponent;
  let fixture: ComponentFixture<TrackeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

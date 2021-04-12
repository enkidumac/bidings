import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaComponent } from './ala.component';

describe('AlaComponent', () => {
  let component: AlaComponent;
  let fixture: ComponentFixture<AlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

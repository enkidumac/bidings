import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBidingsComponent } from './show-bidings.component';

describe('ShowBidingsComponent', () => {
  let component: ShowBidingsComponent;
  let fixture: ComponentFixture<ShowBidingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBidingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBidingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockconfigComponent } from './stockconfig.component';

describe('StockconfigComponent', () => {
  let component: StockconfigComponent;
  let fixture: ComponentFixture<StockconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

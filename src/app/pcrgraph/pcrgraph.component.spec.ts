import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrgraphComponent } from './pcrgraph.component';

describe('PcrgraphComponent', () => {
  let component: PcrgraphComponent;
  let fixture: ComponentFixture<PcrgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcrgraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcrgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

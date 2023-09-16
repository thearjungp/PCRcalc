import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrloggerComponent } from './pcrlogger.component';

describe('PcrloggerComponent', () => {
  let component: PcrloggerComponent;
  let fixture: ComponentFixture<PcrloggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcrloggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcrloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

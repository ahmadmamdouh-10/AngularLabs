import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdFrmAPIComponent } from './prd-frm-api.component';

describe('PrdFrmAPIComponent', () => {
  let component: PrdFrmAPIComponent;
  let fixture: ComponentFixture<PrdFrmAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdFrmAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdFrmAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

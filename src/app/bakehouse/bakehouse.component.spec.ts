import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakehouseComponent } from './bakehouse.component';

describe('BakehouseComponent', () => {
  let component: BakehouseComponent;
  let fixture: ComponentFixture<BakehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

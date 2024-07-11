import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakehouseContactComponent } from './bakehouse-contact.component';

describe('BakehouseContactComponent', () => {
  let component: BakehouseContactComponent;
  let fixture: ComponentFixture<BakehouseContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakehouseContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakehouseContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

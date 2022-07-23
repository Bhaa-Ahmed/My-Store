import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductItemDetailComponent } from './prouduct-item-detail.component';

describe('ProuductItemDetailComponent', () => {
  let component: ProuductItemDetailComponent;
  let fixture: ComponentFixture<ProuductItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuductItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

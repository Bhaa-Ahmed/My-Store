import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductItemComponent } from './prouduct-item.component';

describe('ProuductItemComponent', () => {
  let component: ProuductItemComponent;
  let fixture: ComponentFixture<ProuductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductListComponent } from './prouduct-list.component';

describe('ProuductListComponent', () => {
  let component: ProuductListComponent;
  let fixture: ComponentFixture<ProuductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableNotBaseComponent } from './generic-table-not-base.component';

describe('GenericTableNotBaseComponent', () => {
  let component: GenericTableNotBaseComponent;
  let fixture: ComponentFixture<GenericTableNotBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericTableNotBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericTableNotBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

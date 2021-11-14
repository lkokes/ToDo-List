import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlohaComponent } from './uloha.component';

describe('UlohaComponent', () => {
  let component: UlohaComponent;
  let fixture: ComponentFixture<UlohaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlohaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlohaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

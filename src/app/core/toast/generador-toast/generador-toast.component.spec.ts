import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorToastComponent } from './generador-toast.component';

describe('GeneradorToastComponent', () => {
  let component: GeneradorToastComponent;
  let fixture: ComponentFixture<GeneradorToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

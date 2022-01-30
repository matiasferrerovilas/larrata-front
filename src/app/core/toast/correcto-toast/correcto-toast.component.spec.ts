import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectoToastComponent } from './correcto-toast.component';

describe('CorrectoToastComponent', () => {
  let component: CorrectoToastComponent;
  let fixture: ComponentFixture<CorrectoToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectoToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectoToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputFieldComponent } from './text-input-field.component';

describe('TextInputFieldComponent', () => {
  let component: TextInputFieldComponent;
  let fixture: ComponentFixture<TextInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

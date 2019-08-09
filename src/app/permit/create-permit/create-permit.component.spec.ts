import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePermitComponent } from './create-permit.component';

describe('CreatePermitComponent', () => {
  let component: CreatePermitComponent;
  let fixture: ComponentFixture<CreatePermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePermitComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

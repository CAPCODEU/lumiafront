import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationForm } from './authentification-form';

describe('AuthentificationForm', () => {
  let component: AuthentificationForm;
  let fixture: ComponentFixture<AuthentificationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthentificationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentificationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

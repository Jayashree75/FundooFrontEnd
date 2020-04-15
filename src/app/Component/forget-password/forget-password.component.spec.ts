import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatChipsModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatButtonToggleModule, MatSidenavModule, MatTooltipModule } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ForgetPasswordComponent', () => {
  let component: ForgetPasswordComponent;
  let fixture: ComponentFixture<ForgetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordComponent],
      imports:[MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        MatInputModule,
        MatFormFieldModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

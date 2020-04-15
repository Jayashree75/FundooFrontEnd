import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateNotesComponent } from './create-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatChipsModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatButtonToggleModule, MatSidenavModule, MatTooltipModule } from '@angular/material';
import { IconComponent } from '../icon/icon.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('CreateNotesComponent', () => {
  let component: CreateNotesComponent;
  let fixture: ComponentFixture<CreateNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNotesComponent,
        IconComponent
      ],
      imports: [FormsModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        OwlDateTimeModule,
        MatCheckboxModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: []

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

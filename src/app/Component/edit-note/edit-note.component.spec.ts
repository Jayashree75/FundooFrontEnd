import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatIconModule, MatSnackBarModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatButtonToggleModule, MatSidenavModule, MatTooltipModule, MatToolbarModule, MatDivider, MatDividerModule, MatListModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { EditNoteComponent } from './edit-note.component';
import { MatFormField, MatFormFieldModule, MatChipsModule } from '@angular/material';
import { IconComponent } from '../icon/icon.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditNoteComponent', () => {
  let component: EditNoteComponent;
  let fixture: ComponentFixture<EditNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditNoteComponent, IconComponent],
      imports: [FormsModule,
        MatFormFieldModule,
        MatChipsModule,
        MatMenuModule,
        MatIconModule,
        OwlDateTimeModule,
        MatCheckboxModule,
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        OwlNativeDateTimeModule
      ],
      providers: [DataService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

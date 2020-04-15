import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatChipsModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatButtonToggleModule, MatSidenavModule, MatTooltipModule, MatToolbarModule, MatDivider, MatDividerModule, MatListModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { NotesComponent } from '../notes/notes.component';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';
import { RemainderComponent } from '../remainder/remainder.component';
import { LabelComponent } from '../label/label.component';
import { SearchComponent } from '../search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateNotesComponent } from '../create-notes/create-notes.component';
import { IconComponent } from '../icon/icon.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxMasonryModule, NgxMasonryComponent } from 'ngx-masonry';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent,
        NgxMasonryComponent,
        CreateNotesComponent,
        LoginComponent,
        RegistrationComponent,
        ForgetPasswordComponent,
        ResetpasswordComponent,
        NotesComponent,
        TrashComponent,
        ArchiveComponent,
        RemainderComponent,
        LabelComponent,
        SearchComponent,
        IconComponent,
        DisplayNotesComponent
      ],
      imports: [
        MatIconModule,
        MatFormFieldModule,
        MatMenuModule,
        MatToolbarModule,
        MatDividerModule,
        MatSidenavModule,
        MatListModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatCardModule,
        MatButtonToggleModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatCheckboxModule,
        MatDialogModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

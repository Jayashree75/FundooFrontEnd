import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchiveComponent } from './archive.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatChipsModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatButtonToggleModule, MatSidenavModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { IconComponent } from '../icon/icon.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';
import { OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from 'src/app/app.component';
import { MatDialogModule } from '@angular/material/dialog';
describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [ArchiveComponent,
        DisplayNotesComponent,
        IconComponent,
        AppComponent
      ],

      imports: [MatCardModule,
        MatDialogModule,
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatTooltipModule,
        MatAutocompleteModule,
        // NgxSpinnerModule,
        MatChipsModule,
        OwlNativeDateTimeModule,
        MatSnackBarModule,
        NgxMasonryModule,
        MatIconModule,
        MatMenuModule,
        OwlDateTimeModule,
        MatCheckboxModule,
      ],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

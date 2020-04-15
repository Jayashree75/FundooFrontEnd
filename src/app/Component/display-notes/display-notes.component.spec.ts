import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatChipsModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatButtonToggleModule, MatSidenavModule, MatTooltipModule, MatMenuTrigger, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DisplayNotesComponent } from './display-notes.component';
import { IconComponent } from '../icon/icon.component';
import { NgxMasonryComponent } from 'ngx-masonry';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';
import { HttpClientModule } from '@angular/common/http';
describe('DisplayNotesComponent', () => {
  let component: DisplayNotesComponent;
  let fixture: ComponentFixture<DisplayNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayNotesComponent,
        IconComponent,
        NgxMasonryComponent
      ],
      imports: [MatChipsModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        FormsModule,
        OwlDateTimeModule,
        MatCheckboxModule,
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule
      ],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

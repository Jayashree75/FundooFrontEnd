import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatChipsModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatButtonToggleModule, MatSidenavModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateLabelComponent } from './create-label.component';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
describe('CreateLabelComponent', () => {
  let component: CreateLabelComponent;
  let fixture: ComponentFixture<CreateLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLabelComponent],
      imports: [
        MatIconModule,
        FormsModule,
        MatDividerModule,
        HttpClientModule
      ],
      providers: [DataService,
        { provide: MatDialogRef, useValue: { close: (dialogResult: any) => { } } },
        { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

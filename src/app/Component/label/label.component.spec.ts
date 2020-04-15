import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelComponent } from './label.component';
import { CreateNotesComponent } from '../create-notes/create-notes.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule, MatIconModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { IconComponent } from '../icon/icon.component';
import { NgxMasonryComponent } from 'ngx-masonry';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LabelComponent, 
        CreateNotesComponent, 
        DisplayNotesComponent, 
        IconComponent, 
        NgxMasonryComponent
      ],
      imports: [FormsModule,
        ReactiveFormsModule, 
        MatChipsModule, 
        MatIconModule,
        MatCardModule, 
        MatMenuModule, 
        OwlDateTimeModule, 
        OwlNativeDateTimeModule,
        MatCheckboxModule, 
        HttpClientModule, 
        RouterTestingModule, 
        MatDialogModule
      ],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

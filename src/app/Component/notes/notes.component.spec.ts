import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotesComponent } from './notes.component';
import { CreateNotesComponent } from '../create-notes/create-notes.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { IconComponent } from '../icon/icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule, MatIconModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { NgxMasonryComponent } from 'ngx-masonry';
import { OwlTimerComponent } from 'ng-pick-datetime/date-time/timer.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesComponent, 
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
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

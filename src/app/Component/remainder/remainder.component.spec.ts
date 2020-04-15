import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RemainderComponent } from './remainder.component';
import { CreateNotesComponent } from '../create-notes/create-notes.component';
import { IconComponent } from '../icon/icon.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule, MatIconModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { NgxMasonryModule } from 'ngx-masonry';
import { HttpClientModule } from '@angular/common/http';

describe('RemainderComponent', () => {
  let component: RemainderComponent;
  let fixture: ComponentFixture<RemainderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemainderComponent, 
        CreateNotesComponent, 
        IconComponent, 
        DisplayNotesComponent
      ],
      imports: [OwlDateTimeModule, 
        OwlNativeDateTimeModule, 
        FormsModule, 
        ReactiveFormsModule, 
        MatChipsModule, 
        MatIconModule, 
        MatCardModule, 
        MatMenuModule, 
        MatCheckboxModule,
        NgxMasonryModule, 
        HttpClientModule, 
        RouterTestingModule, 
        MatDialogModule
      ],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

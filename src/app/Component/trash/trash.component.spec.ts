import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TrashComponent } from './trash.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { IconComponent } from '../icon/icon.component';
import { MatChipsModule, MatIconModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxMasonryModule } from 'ngx-masonry';
import { RouterTestingModule } from '@angular/router/testing';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';

describe('TrashComponent', () => {
  let component: TrashComponent;
  let fixture: ComponentFixture<TrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrashComponent,
        DisplayNotesComponent,
        IconComponent
      ],
      imports: [MatChipsModule,
        MatIconModule,
        HttpClientModule,
        MatCardModule,
        NgxMasonryModule,
        MatMenuModule,
        FormsModule,
        RouterTestingModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatCheckboxModule,
        MatDialogModule
      ],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

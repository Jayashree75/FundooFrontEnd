import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from './search.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { MatChipsModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { IconComponent } from '../icon/icon.component';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxMasonryModule } from 'ngx-masonry';
import { FormsModule } from '@angular/forms';
import { OwlNativeDateTimeModule, OwlDateTimeModule } from 'ng-pick-datetime';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent,
        DisplayNotesComponent,
        IconComponent
      ],
      imports:[MatChipsModule,
        MatIconModule,
        RouterTestingModule,
        HttpClientModule,
        MatCardModule,
        NgxMasonryModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,
        MatMenuModule,
        FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatCheckboxModule,
        MatDialogModule
      ],
      providers:[DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

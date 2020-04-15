import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './icon.component';
import { MatMenuModule, MatIconModule, MatCheckboxModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/Services/Data_Service/data-service.service';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent],
      imports: [MatMenuModule, 
        MatIconModule, 
        FormsModule, 
        ReactiveFormsModule, 
        OwlDateTimeModule,
        MatCheckboxModule, 
        MatDialogModule, 
        HttpClientModule, 
        MatSnackBarModule, 
        OwlNativeDateTimeModule
      ],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

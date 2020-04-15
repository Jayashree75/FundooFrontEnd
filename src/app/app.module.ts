import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { materialModule } from './app.material';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AuthGuard } from './Services/AuthGuard/auth.guard';
import { NotesComponent } from './Component/notes/notes.component';
import { CreateNotesComponent } from './Component/create-notes/create-notes.component';
import { DisplayNotesComponent } from './Component/display-notes/display-notes.component';
import { from } from 'rxjs';
import { TrashComponent } from './Component/trash/trash.component';
import { IconComponent } from './Component/icon/icon.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { RemainderComponent } from './Component/remainder/remainder.component';
import { LabelComponent } from './Component/label/label.component';
import { EditNoteComponent } from './Component/edit-note/edit-note.component';
import { CreateLabelComponent } from './Component/create-label/create-label.component';
import { CollaboratorComponent } from './Component/collaborator/collaborator.component';
import { DataService} from './Services/Data_Service/data-service.service'
import { ImageCropperModule } from 'ngx-image-cropper';
import { SearchComponent } from './Component/search/search.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    NotesComponent,
    CreateNotesComponent,
    DisplayNotesComponent,
    TrashComponent,
    IconComponent,
    ArchiveComponent,
    RemainderComponent,
    LabelComponent,
    EditNoteComponent,
    CreateLabelComponent,
    CollaboratorComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,    
    NgxMasonryModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    AppRoutingModule,
    materialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ImageCropperModule
  ],
  entryComponents: [EditNoteComponent, CreateLabelComponent, CollaboratorComponent],
  providers: [AuthGuard,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import{LoginComponent} from './Component/login/login.component';
import{RegistrationComponent} from './Component/registration/registration.component'
import{ForgetPasswordComponent} from './Component/forget-password/forget-password.component';
import{ResetpasswordComponent} from './Component/resetpassword/resetpassword.component';
import{DashboardComponent} from './Component/dashboard/dashboard.component';
import{NotesComponent} from './Component/notes/notes.component';
import{TrashComponent} from './Component/trash/trash.component';
import{CreateNotesComponent} from './Component/create-notes/create-notes.component';
import{DisplayNotesComponent} from './Component/display-notes/display-notes.component';
import{AuthGuard} from './Services/auth.guard'
import { from } from 'rxjs';
const route:Routes=[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent},
  { path:'ForgetPassword',component:ForgetPasswordComponent },
  { path:'ResetPassword/:token',component: ResetpasswordComponent},
  { path:'dashboard', canActivate: [AuthGuard],component: DashboardComponent,children: [
    { path: '', redirectTo: 'notes', pathMatch: 'full' },
    { path: 'notes', component: NotesComponent },
    { path: 'Trash', component: TrashComponent }
  ]},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  
  ],
  exports:[
    RouterModule
  ]              
})
export class AppRoutingModule { }

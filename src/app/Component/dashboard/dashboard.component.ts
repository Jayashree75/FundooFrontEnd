import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LabelService } from '../../Services/Label/label.service'
import { ActivatedRoute } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import{CreateLabelComponent} from '../../Component/create-label/create-label.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() notes;
  token: string = localStorage.getItem('token');
  mobileQuery: MediaQueryList;
  title: string = 'Notes'
  Active: string;
  UserId: number;
  Email: string;
  labels: [any];
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    public dialog: MatDialog,
    private route: Router,
    private labelservice: LabelService,
    private activateroute: ActivatedRoute) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(["login"]);
  }
  ngOnInit(): void {
    let loggetUserToken = localStorage.getItem('token');
    let loggedinUserData = loggetUserToken.split('.')[1];
    let loggeUserjsondata = window.atob(loggedinUserData);
    let loggedUserdecodedata = JSON.parse(loggeUserjsondata);
    let isAdmin = loggedUserdecodedata.userClaims;
    this.UserId = loggedUserdecodedata.UserId;
    this.Email = loggedUserdecodedata.Email;
    console.log(this.Email[0]);
    console.log("Hi" + isAdmin);
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.getAllLabel();
  }
  navigate(value) {
    this.Active = value;
    this.title = value;
  }
  navigateNotes() {
    this.route.navigate(['/notes'])
  }
  navigateTrash() {
    this.route.navigate(['/Trash'])
  }
  navigateArchive() {
    this.route.navigate(['/Archive'])
  }
  navigateRemainder() {
    this.route.navigate(['/Remainder'])
  }
  navigatenotebylabel(LabelID) {
    console.log(LabelID)
    this.route.navigate(['/Label/' + LabelID])
  }
  getAllLabel() {
    console.log()
    this.labelservice.getAllLabel(this.token).subscribe(data => {
      this.labels = data['labelmodel']
      console.log(this.labels)
    }, error => {
      console.log(error);
    })
  }
  OpenDialog(){
    console.log()
    this.dialog.open(CreateLabelComponent,{
      data:this.labels,
    });   
  }
}

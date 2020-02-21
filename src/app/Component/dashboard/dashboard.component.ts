import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 mobileQuery: MediaQueryList;
 title:string='Notes'
 Active:string;
 UserId:number;
 Email:string;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private route:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(["login"]);
  }
  ngOnInit(): void {
    let loggetUserToken=localStorage.getItem('token');
    let loggedinUserData=loggetUserToken.split('.')[1];
    let loggeUserjsondata=window.atob(loggedinUserData);
    let loggedUserdecodedata=JSON.parse(loggeUserjsondata);
    let isAdmin=loggedUserdecodedata.userClaims;
    console.log(loggetUserToken);
    console.log(loggedinUserData);
    console.log(loggeUserjsondata);
    console.log(loggedUserdecodedata);
    this.UserId=loggedUserdecodedata.UserId;
    this.Email=loggedUserdecodedata.Email;
    console.log(this.Email[0]);
    console.log("Hi" +isAdmin);
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  navigate(value)
  {
    this.Active=value;  
    this.title=value;
  }
  navigateNotes()
  {
    this.route.navigate(['/dashboard/notes'])
  }
  navigateTrash()
  {
    this.route.navigate(['/dashboard/Trash'])
  }
}

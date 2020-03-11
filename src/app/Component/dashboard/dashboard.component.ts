import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LabelService } from '../../Services/Label/label.service'
import { ActivatedRoute } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateLabelComponent } from '../../Component/create-label/create-label.component'
import { UserService } from '../../Services/userservice/user.service';
import { DataService } from '../../Services/Data_Service/data-service.service'
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageCropperComponent } from '../../Component/image-cropper/image-cropper.component'
import { from } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';



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
  changeview:boolean;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  viewToolTip = "List View";
  viewClass = "listView";
  src = "../../../assets/Image/Grid.svg";
  userName = localStorage.getItem('fullName');
  userEmail = localStorage.getItem('email');
  userProfilePic = localStorage.getItem('Profile');
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    public dialog: MatDialog,
    private route: Router,
    private dataservice: DataService,
    private labelservice: LabelService,
    private userservice: UserService,
    private activateroute: ActivatedRoute) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(["login"]);
  }
  changeView() {
   if(this.changeview)
   {
     this.changeview=false;
   }
   else{
     this.changeview=true;
   }
    this.dataservice.labelModifiedMessage(
      {
        type:'ChangeViewlist',
        data:this.changeview
    })
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
    this.dataservice.labelMessage.subscribe(data => {
      if (data.type == 'LabelDelete' || data.type == 'LabelUpdate' || data.type == 'LabelAdd') {
        this.getAllLabel();
      }
    })

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
  searchNotes(event: any) {
    console.log("search element")
    this.route.navigate(['/Search'])
    let searchKeyword = event.target.value;
    this.dataservice.labelModifiedMessage({
      data: searchKeyword,
      type: 'search'
    })
  }
  navigatenotebylabel(LabelID) {
    console.log(LabelID)
    this.route.navigate(['/Label/' + LabelID])
  }
  getAllLabel() {
    console.log()
    this.labelservice.getAllLabel().subscribe(data => {
      this.labels = data['labelmodel']
      console.log(this.labels)
      this.dataservice.labelModifiedMessage({type:'GetAllLabel', data:data})
    }, error => {
      console.log(error); 
    })
  }
  OpenDialog() {
    console.log()
    this.dialog.open(CreateLabelComponent, {
      data: this.labels
    });
  }
 
  openDialogForImage() {
    const dialogRef = this.dialog.open(ImageCropperComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }
  changeProfilePicture(files: File) {
    let fileToUpload = <File>files[0];
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload);
    return this.userservice.ChangeProfile(formData).subscribe(response => {
      localStorage.setItem('Profile', response.imageUrl)
      console.log('response', response.imageUrl);
    }, error => {
      console.log('error', error);
    })
  }
}

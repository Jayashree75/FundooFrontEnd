import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { NotesService } from '../../Services/noteService/notes.service';
import { DataService } from '../../Services/Data_Service/data-service.service'
import { collaboratorlist } from '../../Model/collaboratorlist'
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  showhide: boolean = false;
  collaborateuser = [];
  collaborateid = [];
  items: string;
  @Input() note;
  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    private dataservice: DataService,
    private noteservice: NotesService,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  filteredUsers: Observable<string[]>;
  ownerId = localStorage.getItem('userId');
  ownerName = localStorage.getItem('fullName');
  ownerEmail = localStorage.getItem('email');
  ownerProfile = localStorage.getItem('Profile');
  ngOnInit() {
    this.collaborateuser=this.data.collaborateResponse;
  }
  OnDismiss(): void {
    this.dialogRef.close();
  }
 
  changeShowStatus() {
    this.showhide = !this.showhide;
  }
  searched = [];
  GetAllUser(items) {
    this.noteservice.GetAllUser(items).subscribe(response => {
      this.searched = response['result'];
    })
  }
  AddtoArrayUsers(items) {
    for (var i = 0; i < this.searched.length; i++) {
      if (this.searched[i]['email'] == items) {
        this.collaborateuser.push({
          'email': this.searched[i]['email'],
          'userid': this.searched[i]['userid'],
          'firstName': this.searched[i]['firstName'],
          'lastName': this.searched[i]['lastName']
        })
        console.log("collaborateuser", this.collaborateuser)
      }
      this.collaborateid.push({
        'userid': this.searched[i]['userid']
      })

    }

  }
  cancelCollab(email) {
    for (var i = 0; i < this.collaborateuser.length; i++) {
      if (this.collaborateuser[i]["email"] == email) {
        this.collaborateuser.splice(i, 0);
        this.noteservice.RemoveCollaborate(this.data.noteID,this.collaborateuser[i].userId).subscribe(data=>
          {},error => {
        })
      }
    }
    // for (var i = 0; i < this.collaborateid.length; i++) {
    //   if (this.collaborateid[i]["userid"] == userid) {
    //     this.collaborateid.splice(i, 1);
    //     this.noteservice.RemoveCollaborate(this.data.noteID,this.collaborateuser[i].userId).subscribe(data=>{

    //     })
    //   }
    // }
  }
  AddCollaborate() {
    var user = new collaboratorlist();
    user.collaborates = this.collaborateid;
    this.noteservice.AddCollaborate(user, this.data.noteID).subscribe(data => {
    }, error => {
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import{ NotesService} from '../../Services/noteService/notes.service'

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
 showhide:boolean=false;
 items:string;
  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    private noteservice:NotesService,

    @Inject(MAT_DIALOG_DATA) public data) {
      
     }

  filteredUsers: Observable<string[]>;
  ownerId = localStorage.getItem('userId');
  ownerName = localStorage.getItem('fullName');
  ownerEmail = localStorage.getItem('email');
  ownerProfile = localStorage.getItem('Profile');
  ngOnInit() {
  }
  OnDismiss(): void {
    this.dialogRef.close();
  }
  AddCollaborator() {

  }
  changeShowStatus(){
    this.showhide = !this.showhide;
  }
}

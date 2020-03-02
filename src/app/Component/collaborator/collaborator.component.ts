import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

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

}

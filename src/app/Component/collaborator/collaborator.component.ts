import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  constructor() { }
  
  filteredUsers: Observable<string[]>;
  ownerId = localStorage.getItem('userId');
  ownerName = localStorage.getItem('fullName');
  ownerEmail = localStorage.getItem('email');
  ownerProfile = localStorage.getItem('Profile');
  ngOnInit() {
  }
}

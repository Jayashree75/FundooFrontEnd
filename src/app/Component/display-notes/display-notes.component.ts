import { Component, OnInit, Input, Inject ,Output,EventEmitter} from '@angular/core';
import { NotesService } from '../../Services/noteService/notes.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditNoteComponent } from '../../Component/edit-note/edit-note.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() notes;
  @Input() isTrash;
  @Input() isArchive;
  UserId: number;
  email: string;
  @Output() NoteTrash=new EventEmitter<any>();
  @Output() NoteArchive=new EventEmitter<any>();
  @Output() DeleteNote=new EventEmitter<any>();
  constructor(private route:Router,private noteservice: NotesService, public dialog: MatDialog) { }
  ngOnInit() {
    let loggetUserToken = localStorage.getItem('token');
    let loggedinUserData = loggetUserToken.split('.')[1];
    let loggeUserjsondata = window.atob(loggedinUserData);
    let loggedUserdecodedata = JSON.parse(loggeUserjsondata);
    let isAdmin = loggedUserdecodedata.userClaims;
    this.UserId = loggedUserdecodedata.UserId;
    this.email = loggedUserdecodedata.Email;
    console.log(this.email[0]);
    console.log("Hi" + isAdmin);
  }

  
  UpdateNote(note){
    console.log(note)
    this.dialog.open(EditNoteComponent,{      
      data:note,
    });   
  }
  noteTrashed()
  {
  this.NoteTrash.emit();
  }
  noteArchive()
  {
    this.NoteArchive.emit();
  }
  deleteNote()
  {
    this.DeleteNote.emit();
  } 
 
}

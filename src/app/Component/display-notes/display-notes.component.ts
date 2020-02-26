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
  @Output() NoteTrash=new EventEmitter<any>();
  @Output() NoteArchive=new EventEmitter<any>();
  @Output() DeleteNote=new EventEmitter<any>();
  constructor(private route:Router,private noteservice: NotesService, public dialog: MatDialog) { }
  ngOnInit() {
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

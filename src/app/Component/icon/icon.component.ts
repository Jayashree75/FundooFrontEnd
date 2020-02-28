import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/Services/noteService/notes.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  token: string;
  @Input() isTrash;
  @Input() note;
  @Input() isArchive;
  @Output() NoteTrashEvent=new EventEmitter<any>();
  @Output() NoteArchiveEvent=new EventEmitter<any>();
  @Output() DeleteNoteEvent=new EventEmitter<any>();
  status = false;
  constructor( public dialog: MatDialog,private noteservice: NotesService) { }

  ngOnInit() {
  }
  TrashNote() {
    console.log(this.note.noteID)
    this.noteservice.TrashNote(this.note.noteID).subscribe(Response => {
      console.log("note response", Response);
      this.NoteTrashEvent.emit();
    }, error => { console.log("notes response", error) })
  }
  DeleteNote() {
    console.log(this.note.noteID)
    this.noteservice.deleteNote(this.note.noteID).subscribe(Response => {
      console.log("note response", Response);
      this.DeleteNoteEvent.emit();
    }, error => { console.log("notes response", error) })
  }
  ArchiveNote() {
    console.log(this.note.noteID)
    this.noteservice.ArchiveNote(this.note.noteID).subscribe(Response => {
      console.log("note response", Response);
      this.NoteArchiveEvent.emit();
    }, error => { console.log("notes response", error) })
  }
  
}

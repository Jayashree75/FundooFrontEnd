import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/Services/noteService/notes.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CollaboratorComponent } from '../../Component/collaborator/collaborator.component'

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
  @Output() NoteTrashEvent = new EventEmitter<any>();
  @Output() NoteArchiveEvent = new EventEmitter<any>();
  @Output() DeleteNoteEvent = new EventEmitter<any>();
  status = false;
  color = ['#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed',
    '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa',
    '#f28b82', '#fbbc04', '#fff475', '#fff'
  ]
  constructor(public dialog: MatDialog, private noteservice: NotesService) { }

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
  ChangeColor(Colour) {
    console.log(this.note.noteID)
    this.note.color = Colour;
    console.log(Colour)
    let data = {
      'color': Colour
    }
    console.log(data);
    this.noteservice.ChangeColor(this.note.noteID, data).subscribe(Response => {
      console.log("color response", Response);
    }, error => { console.log("color response", error) })
  }
  openDialog() {
    console.log()
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '500px',
      height: 'auto',
      panelClass: "Collaborate"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  AddImageToNotes(files: File) {
    let fileToUpload = <File>files[0];
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload);
    return this.noteservice.AddImage(formData, this.note.noteID).subscribe(response => {
      console.log(response)
      this.note.image = response.imageUrl;
      console.log('response', response.imageUrl);
    }, error => {
      console.log('error', error);
    })
  }
}

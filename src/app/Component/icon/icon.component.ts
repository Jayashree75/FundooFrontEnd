import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/Services/noteService/notes.service';

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
  constructor(private noteservice: NotesService) { }

  ngOnInit() {
  }

  TrashNote() {
    console.log(this.note.noteID)
    this.noteservice.TrashNote(this.note.noteID).subscribe(Response => {
      console.log("note response", Response);
    }, error => { console.log("notes response", error) })
  }
  DeleteNote()
  {
    console.log(this.note.noteID)
    this.noteservice.deleteNote(this.note.noteID).subscribe(Response => {
      console.log("note response", Response);
    }, error => { console.log("notes response", error) })
  }
  ArchiveNote()
  {
    console.log(this.note.noteID)
    this.noteservice.ArchiveNote(this.note.noteID).subscribe(Response => {
      console.log("note response", Response);
    }, error => { console.log("notes response", error) })  
  }
}

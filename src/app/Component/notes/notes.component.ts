import { Component, OnInit, Host } from '@angular/core';
import { NotesService } from '../../Services/noteService/notes.service';
import { ISO8601_DATE_REGEX } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  styles: [':host{ width:100%}']
})
export class NotesComponent implements OnInit {
  token: string;
  notes = [];
  note = [];
  isPin:boolean;
  constructor(private noteservice: NotesService) { }

  ngOnInit() {
    this.GetAllNotes();
  }
  GetAllNotes() {
    var token = localStorage.getItem("token")
    this.noteservice.getAllNotes().subscribe(Response => {
      console.log("note response", Response);
      this.notes = Response['notesDBs'];
      this.note = this.notes.filter(linq => linq.isTrash == false && linq.isArchive == false);  
      console.log("response", this.note)
    }, error => { console.log("notes response", error) })
  }
  async addNoteEvent(event) {
    console.log("event from add note", event);
    this.GetAllNotes();
  }
 
 
}


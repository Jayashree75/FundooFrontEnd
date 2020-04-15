import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../Services/noteService/notes.service';
import { ISO8601_DATE_REGEX } from '@angular/common/src/i18n/format_date';
import { DataService } from '../../Services/Data_Service/data-service.service'
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
  isPin: boolean;
  constructor(private noteService: NotesService, private dataservice: DataService) { }

  ngOnInit() {
    this.GetAllNotes();
    this.dataservice.labelMessage.subscribe(response => {
      if (response.type == 'pin' || response.type == 'Unpin' || response.type == 'addReminder' || response.type == 'removeReminder' || response.type == 'ChangeViewlist') {
        this.GetAllNotes();
      }
    })
  }

  pinnedNotes = [];
  unpinnedNotes = [];
  separateNotes() {
    this.pinnedNotes = [];
    this.unpinnedNotes = [];
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].isPin == true && this.notes[i].isArchive == false && this.notes[i].isTrash == false) {
        this.pinnedNotes.push(this.notes[i]);
      } else if (this.notes[i].isPin == false && this.notes[i].isArchive == false && this.notes[i].isTrash == false) {
        this.unpinnedNotes.push(this.notes[i]);
      }
    }
  }


  GetAllNotes() {
    this.noteService.getAllNotes().subscribe(Response => {
      this.notes = Response['notesDBs'];
      this.separateNotes();
    }, error => { console.log("notes response", error) })
  }
  async addNoteEvent(event) {
    this.GetAllNotes();
  }
}


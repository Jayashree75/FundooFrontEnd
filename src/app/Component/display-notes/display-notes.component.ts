import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../Services/noteService/notes.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditNoteComponent } from '../../Component/edit-note/edit-note.component'
import { Router } from '@angular/router';
import { DataService } from '../../Services/Data_Service/data-service.service'
import { Labels } from 'src/app/Model/labelModel';
import { LabelService } from 'src/app/Services/Label/label.service';
import { Notes } from 'src/app/Model/NotesModel';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() notes;
  @Input() isTrash;
  @Input() isArchive;
  @Input() isPin;
  @Input() getChildMessage: any;
  labelArr = [];
  changeview: any;
  UserId: number;
  email: string;
  flag: boolean;
  value = '2'
  selectable = true;
  removable = true;
  accessfrom: string;
  @Output() NoteTrash = new EventEmitter<any>();
  @Output() NoteArchive = new EventEmitter<any>();
  @Output() DeleteNote = new EventEmitter<any>();

  constructor(private route: Router, private dataservice: DataService,
    private noteservice: NotesService, public dialog: MatDialog) {
  }
  ngOnInit() {
    this.accessfrom = "Display Note"
    if (this.notes) {
      this.labelArr = this.notes.labels;
    }

    let loggetUserToken = localStorage.getItem('token');
    if (loggetUserToken != null) {
      let loggedinUserData = loggetUserToken.split('.')[1];
      let loggeUserjsondata = window.atob(loggedinUserData);
      let loggedUserdecodedata = JSON.parse(loggeUserjsondata);
      let isAdmin = loggedUserdecodedata.userClaims;
      this.UserId = loggedUserdecodedata.UserId;
      this.email = loggedUserdecodedata.Email;
      console.log(this.email[0]);
      console.log("Hi" + isAdmin);

    } this.dataservice.labelMessage.subscribe(response => {
      if (response.type == 'ChangeViewlist') {
        this.value = response.data;
      }
    })
  }
  removeRemainder(value) {
    let data = {
      id: value,
      Reminder: null
    }
    this.noteservice.addReminder(data, data.id).subscribe(response => {
      console.log(response);
      this.dataservice.labelModifiedMessage({
        type: 'removeReminder'
      })
    }, error => {
      console.log(error)
    })
  }

  remove(noteid, labelid, mynotes) {
    this.labelArr = this.notes;

    console.log(this.labelArr)
    this.noteservice.RemoveLabelFromNotes(noteid, labelid).subscribe(data => {
      console.log(data)
      mynotes.labels = data['status']
    })
  }

  UpdateNote(note) {
    console.log(note)
    this.dialog.open(EditNoteComponent, {
      data: note,
      panelClass: 'EditNote'
    });
  }
  PinNote(noteId) {
    this.noteservice.AddPin(noteId).subscribe(Response => {
      this.dataservice.labelModifiedMessage({
        data: noteId,
        type: 'pin'
      })
    }, error => { console.log("notes response", error) })
  }
  UnPinNote(noteId) {
    this.noteservice.Unpin(noteId).subscribe(Response => {
      this.dataservice.labelModifiedMessage({
        data: noteId,
        type: 'Unpin'
      })
    }, error => { console.log("notes response", error) })
  }
  noteTrashed() {
    this.NoteTrash.emit();
  }
  noteArchive() {
    this.NoteArchive.emit();
  }
  deleteNote() {
    this.DeleteNote.emit();
  }
  addnotestoarray = [];
  addtoArray(noteId) {
    this.addnotestoarray = noteId;
    for (var i = 0; i < this.addnotestoarray.length; i++) {
      if (this.addnotestoarray[i].noteID == noteId) {
        this.flag = true;
        break;
      }
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../../Services/noteService/notes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
export interface DialogData {
  title: string;
  description: string;
}
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  title: string;
  description: string;
  @Input() note;
  constructor(private activateroute: ActivatedRoute,
    private noteservice: NotesService,
    public dialogRef: MatDialogRef<EditNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  UpdateNote() {
    let dataitem={
      Title:this.data.title,
      Description:this.data.description
    }
    console.log(this.note.noteID)
    this.noteservice.UpdateNote(dataitem, this.note.noteId).subscribe(Response => {
      console.log("note response", Response);
    }, error => { console.log("notes response", error) })
  }
}

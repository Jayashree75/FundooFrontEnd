import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../../Services/noteService/notes.service';
import { ActivatedRoute } from "@angular/router";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
@Input() note;
accessfrom:string;
  constructor(private activateroute: ActivatedRoute, private noteservice: NotesService, public dialogRef: MatDialogRef<EditNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      console.log(data);
    }

  ngOnInit() {
    this.accessfrom="Edit Note"
    // this.dialogRef.updateSize('50%', 'auto');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  updateNote() {
    let updatedata={
      Title:this.data.title,
      Description:this.data.description,
      image:this.data.image,
      color:this.data.color 
    }
    this.noteservice.UpdateNote(updatedata, this.data.noteID).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error)
    })
    this.dialogRef.close();
  }
}
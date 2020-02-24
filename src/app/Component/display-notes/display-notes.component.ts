import { Component, OnInit,Input,Inject } from '@angular/core';
import{NotesService} from '../../Services/noteService/notes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {EditNoteComponent} from '../../Component/edit-note/edit-note.component'



export interface DialogData {
  title: string;
  description: string;
}
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
@Input() notes;
@Input() isTrash;
@Input() isArchive;


  constructor(private noteservice:NotesService,public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditNoteComponent, {
      width: '400px',
      height:'200px',
      data: {title:this.notes.title,
        description:this.notes.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

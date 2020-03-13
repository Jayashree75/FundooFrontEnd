import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/Services/noteService/notes.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CollaboratorComponent } from '../../Component/collaborator/collaborator.component'
import { DataService } from '../../Services/Data_Service/data-service.service'
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  token: string;
  colors: string;
  status = false;
  checked: Boolean = false;
  getallLabels = [];

  labels = [];
  @Input() isTrash;
  @Input() note;
  @Input() isArchive;
  @Input() accessingFrom;
  @Input() accessdisplay;
  @Input() accessEdit;
  @Output() NoteTrashEvent = new EventEmitter<any>();
  @Output() NoteArchiveEvent = new EventEmitter<any>();
  @Output() DeleteNoteEvent = new EventEmitter<any>();
  @Output() ColorEvent = new EventEmitter<any>();
  @Output() AddLabelEvent =new EventEmitter<any>();

  color = ['#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed',
    '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa',
    '#f28b82', '#fbbc04', '#fff475', '#fff'
  ]
  constructor(public dialog: MatDialog, private noteservice: NotesService,
    private dataservice: DataService) {
    this.dataservice.labelMessage.subscribe(data => {
      if (data.type == 'GetAllLabel') {
        this.labels = data.data['labelmodel']
      }
    })
  }
  ngOnInit() {
  }
  TrashNote() {
    this.noteservice.TrashNote(this.note.noteID).subscribe(Response => {
      this.NoteTrashEvent.emit();
    }, error => { console.log("notes response", error) })
  }
  Checklabel(labelId: number): boolean {
    if (this.accessdisplay == "Display Note" || this.accessEdit == "Edit Note") {
      this.getallLabels = this.note.labels;
      for (var label = 0; label < this.getallLabels.length; label++) {
        if (this.getallLabels[label].labelID == labelId) {
          return true;
        }
      }
      return false;
    }
    else if (this.accessingFrom == "create note")
      for (var label = 0; label < this.getallLabels.length; label++) {
        if (this.getallLabels[label].labelID == labelId) {
          return true;
        }
      }
    return false;
  }

  AddLabelToNotes(label) {
    if(this.note==undefined)
    {
      this.AddLabelEvent.emit(label);
    }
    else{
    if (this.Checklabel(label.labelID) == false) {
      console.log("add label call", label);
      this.noteservice.AddLabeltoNotes(this.note.noteID, label.labelID).subscribe(response => {
        console.log(" label added successfully ");
        this.note.labels = response['status'];
     
      }, error => { console.log("notes label response", error) })
    }
    else {
      console.log("remove label call", label)
      this.noteservice.RemoveLabelFromNotes(this.note.noteID, label.labelID).subscribe(response => {
        console.log(" label removed successfully  ", response);
        this.note.labels = response['status'];
      })
    }
  }
}
  DeleteNote() {
    this.noteservice.deleteNote(this.note.noteID).subscribe(Response => {
      this.DeleteNoteEvent.emit();
    }, error => { console.log("notes response", error) })
  }
  ArchiveNote() {
    console.log(this.note.noteID)
    this.noteservice.ArchiveNote(this.note.noteID).subscribe(Response => {
      this.NoteArchiveEvent.emit();
    }, error => { console.log("notes response", error) })
  }
  ChangeColor(Colour) {
    if (this.note == undefined) {
      this.colors = Colour;
      this.ColorEvent.emit(this.colors);
    }
    else {
      console.log(this.note.noteID)
      this.note.color = Colour;
      let data = {
        'color': Colour
      }
      console.log(data);
      this.noteservice.ChangeColor(this.note.noteID, data).subscribe(Response => {
      }, error => { console.log("color response", error) })
    }
  }
  openDialog() {
    console.log()
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      data: this.note,
      width: '500px',
      height: 'auto',
      panelClass: "Collaborate"
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  AddImageToNotes(files: File) {
    let fileToUpload = <File>files[0];
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload);
    return this.noteservice.AddImage(formData, this.note.noteID).subscribe(response => {
      this.note.image = response.imageUrl;
    }, error => {
    })
  }

  // RemoveLabels(label)
  // {
  // this.noteservice.RemoveLabelFromNotes(this.note.noteID,label.labelID).subscribe(response=>
  //   {
  //   })
  // }
}
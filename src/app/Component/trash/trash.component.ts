import { Component, OnInit } from '@angular/core';
import{NotesService} from '../../Services/noteService/notes.service'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
 token:string;
 notes=[];
 isTrash:boolean;
  constructor(private noteservice:NotesService) { }

  ngOnInit() {
    this.GetAllTrash();
  }

  GetAllTrash()
  {
    var token=localStorage.getItem("token")
    this.noteservice.getAllTrash(token).subscribe(Response => {
      console.log("note response", Response);
      this.notes=Response['notesDBs'];
      console.log("response trash",this.notes)
    }, error => { console.log("notes response", error) })
  }  

}

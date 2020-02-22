import { Component, OnInit } from '@angular/core';
import{NotesService} from '../../Services/noteService/notes.service';
@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {

  token:string;
  notes=[];
  isTrash:boolean;

  constructor(private noteservice:NotesService) { }

  ngOnInit() {
    this.getAllRemainder();
  }
  getAllRemainder()
  {
    var token=localStorage.getItem("token")
    this.noteservice.getAllRemainder(token).subscribe(Response => {
      console.log("note response", Response);
      this.notes=Response['notesDBs'];
      console.log("response trash",this.notes)
    }, error => { console.log("notes response", error) })
  }  
}

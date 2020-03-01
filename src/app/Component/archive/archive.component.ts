import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/noteService/notes.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  token: string;
  notes = [];
  iaArchive: boolean;
  constructor(private noteservice: NotesService) { }

  ngOnInit() {
    this.GetAllArchive();
  }
  GetAllArchive() {
    var token = localStorage.getItem("token")
    this.noteservice.getAllArchive().subscribe(Response => {
      console.log("note response", Response);
      this.notes = Response['notesDBs'];
      console.log("response trash", this.notes)
    }, error => { console.log("notes response", error) })
  }
  
}

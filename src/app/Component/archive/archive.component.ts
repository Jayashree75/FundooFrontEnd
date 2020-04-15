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
  isArchive: boolean;
  constructor(private noteservice: NotesService) { }

  ngOnInit() {
    this.GetAllArchive();
  }
  GetAllArchive() {
    this.noteservice.getAllArchive().subscribe(Response => {
      this.notes = Response['notesDBs'];
    }, error => { console.log("notes response", error) })
  }
}

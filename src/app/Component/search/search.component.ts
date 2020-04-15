import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/noteService/notes.service';
import { DataService } from '../../Services/Data_Service/data-service.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private noteservice: NotesService, private dataService: DataService) { }

  ngOnInit() {
    console.log("in search")
    this.dataService.labelMessage.subscribe(response => {
      console.log(response)
      if (response.type == "search") {
        var result = response.data;
        this.searchNotes(result);
      }
    })
  }
  searched = [];

  searchNotes(val) {
    this.noteservice.SearchNotes(val).subscribe(response => {
      console.log(response);
      this.searched = response['notesDBs']
    })
  }
}

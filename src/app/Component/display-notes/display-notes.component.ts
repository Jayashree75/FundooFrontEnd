import { Component, OnInit,Input } from '@angular/core';
import{NotesService} from '../../Services/noteService/notes.service';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
@Input() notes;
@Input() isTrash;

  constructor(private noteservice:NotesService) { }

  ngOnInit() {
  }
}

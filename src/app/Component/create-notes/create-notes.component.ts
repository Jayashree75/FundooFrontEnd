import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { NotesService } from '../../Services/noteService/notes.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  notes: FormGroup;
  status = false;
  token: string;
  public color:string;
  @Output() addNoteEvent = new EventEmitter<any>();
  constructor(private noteservice: NotesService,
    private router: Router,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    console.log(this.token);
    this.notes = this.formbuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
  get f() {
    return this.notes.controls;
  }
  Colorchange(event)
  {
    this.color=event;
  }
  createNote() {
    this.status = false;
    if(this.notes.controls['title'].value ||this.notes.controls['description'].value )
    {  
      var token = localStorage.getItem("token")
      console.log('values in notes', this.notes.value);
      this.noteservice.createnote(this.notes.value, token).subscribe(Response => {
        this.color=''
        console.log("note response", Response);
        this.addNoteEvent.emit();
      }, error => { console.log("notes response", error) })
    }
    }
    
}

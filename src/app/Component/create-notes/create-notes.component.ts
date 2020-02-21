import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { NotesService } from '../../Services/noteService/notes.service';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  notes: FormGroup;
  status = false;
  token:string;
  constructor(private noteservice: NotesService,
    private router: Router,
    private route:ActivatedRoute,
    private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.token=this.route.snapshot.params['token'];
    console.log(this.token);
    this.notes = this.formbuilder.group({
      title: [''],
      description: ['']
    });
  }
  get f() {
    return this.notes.controls;
  }
  createNote() {
    this.status=false;
    var token=localStorage.getItem("token")
    console.log('values in notes', this.notes.value);
    this.noteservice.createnote(this.notes.value,token).subscribe(Response => {
      console.log("note response", Response);
    }, error => { console.log("notes response", error) })
  }
}

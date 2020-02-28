import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LabelService } from '../../Services/Label/label.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Labels } from '../../Model/labelModel'
@Component({
  selector: 'app-create-label',
  templateUrl: './create-label.component.html',
  styleUrls: ['./create-label.component.scss']
})
export class CreateLabelComponent implements OnInit {
  @Input() labels;
  status = false;
  token: string;
  public labelName: string;
  constructor(private labelservice: LabelService,
    public dialogRef: MatDialogRef<CreateLabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    console.log(data);
  }
  ngOnInit() {

  }
  createLabel() {
    var labelcreate: Labels = {
      LabelName: this.labelName,
    }
    var token = localStorage.getItem("token")
    this.labelservice.createlabel(labelcreate, token).subscribe(Response => {
      console.log("label response", Response);
    }, error => { console.log("label response", error) });
  }
  DeleteLabel(labelid) {
    var token = localStorage.getItem("token")
    this.labelservice.createlabel(labelid, token).subscribe(Response => {
      console.log("label response", Response);
    }, error => { console.log("label response", error) });
  }
}

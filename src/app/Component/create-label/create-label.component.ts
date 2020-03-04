import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LabelService } from '../../Services/Label/label.service';
import { DataService } from '../../Services/Data_Service/data-service.service'
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
  getallLabels=[];
  token: string;
  public labelName: string;
  constructor(private labelservice: LabelService,
    private dataservice: DataService,
   public dialogRef: MatDialogRef<CreateLabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    console.log(data);
    this.getallLabels=data;
  }
  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  createLabel() {
    
    var labelcreate: Labels = {
      LabelName: this.labelName,
    }
    this.getallLabels.push(labelcreate);
    this.labelservice.createlabel(labelcreate).subscribe(Response => {
      this.labelAdd(Response);
    }, error => { console.log("label response", error) });
  }
  DeleteLabel(labelID) {
    this.labelservice.deleteLabel(labelID).subscribe(Response => {
       this.sendMessage(Response);
    }, error => { console.log("label response", error) });
  }
  UpdateLabel(labelID,labelname) {
    var labelUpdate: Labels = {
      LabelName: labelname,
    }
    console.log(labelUpdate);
    this.labelservice.UpdateLabels(labelUpdate,labelID).subscribe(Response => {
      console.log("LABEL Response", Response);
      this.LabelUpdate(Response);
    }, error => { console.log("label response", error) });
  }
  sendMessage(data) {
    this.dataservice.labelModifiedMessage({type:'LabelDelete', data:data})
  }
  labelAdd(data) {
    this.dataservice.labelModifiedMessage({type:'LabelAdd', data:data})
  }
  LabelUpdate(data) {
    this.dataservice.labelModifiedMessage({type:'LabelUpdate', data:data})
  }
}

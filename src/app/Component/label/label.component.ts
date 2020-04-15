import { Component, OnInit } from '@angular/core';
import { LabelService } from '../../Services/Label/label.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  token: string;
  labels = [];
  id: string;
  constructor(private labelservice: LabelService, private route: Router, private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.activateroute.params.subscribe(urlId => {
      this.id = urlId.LabelID;
      this.GetNoteByLabelId();
    })
    this.GetNoteByLabelId();
  }
  GetNoteByLabelId() {
    this.id = this.activateroute.snapshot.paramMap.get('LabelID')
    this.labelservice.GetNoteByLabelid(this.id).subscribe(Response => {
      console.log("note response", Response);
      this.labels = Response['noteResponseModels'];
      console.log("response trash", this.labels)
    }, error => { console.log("notes response", error) })
  }
}

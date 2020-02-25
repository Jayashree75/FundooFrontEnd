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
  notes = [];
  constructor(private labelservice: LabelService, private route: Router, private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.GetNoteByLabelId();
  }
  GetNoteByLabelId() {
    let labelid = this.activateroute.snapshot.params.get('labelID')
    this.labelservice.GetNoteByLabelid(labelid, this.token).subscribe(Response => {
      console.log("note response", Response);
      this.notes = Response['noteResponseModels'];
      console.log("response trash", this.notes)
    }, error => { console.log("notes response", error) })
  }
}

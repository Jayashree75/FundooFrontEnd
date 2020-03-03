import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private httpservice: HttpService) { }
  getAllLabel() {
    return this.httpservice.get('api/Label', true)
  }
  GetNoteByLabelid(labelid) {
    return this.httpservice.get('api/Notes/'+ labelid, true)
  }
  createlabel(data) {
    return this.httpservice.post('api/Label', data, true)
  }
  deleteLabel(labelid) {
    return this.httpservice.delete('api/Label/' + labelid, true)
  }
  UpdateLabels(data,labelid)
  {
    console.log(data,labelid)
    return this.httpservice.put('api/Label/' + labelid,data,true)
  }
}

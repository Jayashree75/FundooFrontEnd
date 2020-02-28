import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private httpservice: HttpService) { }
  getAllLabel(token) {
    console.log(token)
   let httpoption=this.httpservice.httpheader(token);
    return this.httpservice.get('api/Label', true, httpoption)
  }
  GetNoteByLabelid(labelid) {
    var token = localStorage.getItem("token");
    let httpoption=this.httpservice.httpheader(token);
    console.log("options data", httpoption)
    return this.httpservice.get('api/Notes/'+ labelid, true, httpoption)
  }
  createlabel(data, token: string) {
    console.log(token);
    let httpoption=this.httpservice.httpheader(token);
    return this.httpservice.post('api/Label', data, true, httpoption)
  }
  deleteLabel(labelid) {
    console.log(labelid, "notes id response")
    var token = localStorage.getItem("token")
    console.log(token); 
    let httpoption=this.httpservice.httpheader(token);
    console.log("options data", httpoption)
    return this.httpservice.delete('api/Label/' + labelid, true, httpoption)
  }
}

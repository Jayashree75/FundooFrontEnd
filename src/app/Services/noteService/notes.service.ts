import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpservice: HttpService) { }
  createnote(data, token: string) {
    console.log(token);
    let httpoption=this.httpservice.httpheader(token);
    return this.httpservice.post('api/Notes', data, true, httpoption)
  }
  
  TrashNote(noteid) {
    console.log(noteid, "notes id response")
    var token = localStorage.getItem("token");
    let httpoption=this.httpservice.httpheader(token);
    console.log("options data", httpoption)
    return this.httpservice.put('api/Notes/' + noteid + '/Trash',{value:true}, true, httpoption)
  }
  ArchiveNote(noteid) {
    console.log(noteid, "notes id response")
    var token = localStorage.getItem("token")
    console.log(token);
    let httpoption=this.httpservice.httpheader(token);
    console.log("options data", httpoption)
    return this.httpservice.put('api/Notes/' + noteid + '/Archive',{value:true}, true, httpoption)
  }
  getAllNotes(token: string) {
    console.log(token);
    let httpoption=this.httpservice.httpheader(token);
    return this.httpservice.get('api/Notes', true, httpoption)
  }
  getAllTrash(token: string) {
    console.log(token)
    let httpoption=this.httpservice.httpheader(token);
    return this.httpservice.get('api/Notes/Trash', true, httpoption)
  }
  getAllArchive(token: string) {
    console.log(token)
    let httpoption=this.httpservice.httpheader(token);
    return this.httpservice.get('api/Notes/Archive', true, httpoption)
  }
  deleteNote(noteid) {
    console.log(noteid, "notes id response")
    var token = localStorage.getItem("token")
    console.log(token); 
    let httpoption=this.httpservice.httpheader(token);
    console.log("options data", httpoption)
    return this.httpservice.delete('api/Notes/' + noteid, true, httpoption)
  }
  getAllRemainder(token: string) {
    console.log(token)
    let httpoption=this.httpservice.httpheader(token);
    return this.httpservice.get('api/Notes/Remainder', true, httpoption)
  }
  UpdateNote(data,noteid)
  {
    var token = localStorage.getItem("token");
    let httpoption=this.httpservice.httpheader(token);
    return this.httpservice.put('api/Notes/' + noteid,data,true, httpoption)
  }
}

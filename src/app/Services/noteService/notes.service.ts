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
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.post('api/Notes', data, true, options)
  }
  
  TrashNote(noteid) {
    console.log(noteid, "notes id response")
    var token = localStorage.getItem("token")
    console.log(token);
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    console.log("options data", options)
    return this.httpservice.put('api/Notes/' + noteid + '/Trash',{value:true}, true, options)
  }
  ArchiveNote(noteid) {
    console.log(noteid, "notes id response")
    var token = localStorage.getItem("token")
    console.log(token);
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    console.log("options data", options)
    return this.httpservice.put('api/Notes/' + noteid + '/Archive',{value:true}, true, options)
  }
  getAllNotes(token: string) {
    console.log(token);
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpservice.get('api/Notes', true, options)
  }
  getAllTrash(token: string) {
    console.log(token)
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'content-Type': 'application/json',
        'Accept': '*'
      })
    };
    return this.httpservice.get('api/Notes/Trash', true, options)
  }
  getAllArchive(token: string) {
    console.log(token)
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'content-Type': 'application/json',
        'Accept': '*'
      })
    };
    return this.httpservice.get('api/Notes/Archive', true, options)
  }
  deleteNote(noteid) {
    console.log(noteid, "notes id response")
    var token = localStorage.getItem("token")
    console.log(token);
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    console.log("options data", options)
    return this.httpservice.delete('api/Notes/' + noteid, true, options)
  }
  getAllRemainder(token: string) {
    console.log(token)
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'content-Type': 'application/json',
        'Accept': '*'
      })
    };
    return this.httpservice.get('api/Notes/Remainder', true, options)
  }
}

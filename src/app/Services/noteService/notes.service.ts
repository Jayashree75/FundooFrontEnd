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
    return this.httpservice.post('api/Notes', data, true)
  }
  
  TrashNote(noteid) {
    console.log(noteid, "notes id response")
    return this.httpservice.put('api/Notes/' + noteid + '/Trash',{value:true}, true)
  }
  ArchiveNote(noteid) {
    return this.httpservice.put('api/Notes/' + noteid + '/Archive',{value:true}, true)
  }
  getAllNotes() {
    return this.httpservice.get('api/Notes', true)
  }
  getAllTrash() {
    return this.httpservice.get('api/Notes/Trash', true)
  }
  getAllArchive() {
    return this.httpservice.get('api/Notes/Archive', true)
  }
  deleteNote(noteid) {
    return this.httpservice.delete('api/Notes/' + noteid, true)
  }
  getAllRemainder() {
    return this.httpservice.get('api/Notes/Remainder', true)
  }
  UpdateNote(data,noteid)
  {
    return this.httpservice.put('api/Notes/' + noteid,data,true)
  }
  ChangeColor(noteid,data)
  {
    return this.httpservice.put('api/Notes/'+ noteid+'/Color',data,true)
  }
  AddImage(data,noteid)
  {
    return this.httpservice.postImage('api/Notes/'+ noteid+'/Image',data,true)
  }
  AddCollaborate(data,noteid)
  {
    return this.httpservice.post('api/Notes/'+ noteid+'/Collaborate',data,true)
  }
  AddPin(noteid)
  {
    return this.httpservice.put('api/Notes/'+ noteid+'/Pin',{value:true},true)
  }
  Unpin(noteid)
  {
    return this.httpservice.put('api/Notes/'+ noteid+'/Pin',{value:false},true)
  }
  getAllPin() {
    return this.httpservice.get('api/Notes/Pin', true)
  }
  SearchNotes(key)
  {
    return this.httpservice.get('api/Notes?keyword='+key,true )
  }
}

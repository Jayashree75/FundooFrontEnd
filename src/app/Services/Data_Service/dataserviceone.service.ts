import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private message = new BehaviorSubject({ type: '', data: '' });
  sendmessage = this.message.asObservable();

  constructor() { }

  changemessage(message: any) {
    this.message.next(message)
  }
}
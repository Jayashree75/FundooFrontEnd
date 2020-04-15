import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable()
export class DataService {

  private labelSource = new BehaviorSubject({ type: '', data: '' });
  labelMessage = this.labelSource.asObservable();

  constructor() { }

  labelModifiedMessage(message: any) {
    this.labelSource.next(message)
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private labelSource = new BehaviorSubject({ type: '', data: '' });
  labelMessage = this.labelSource.asObservable();

  constructor() { }

  labelModifiedMessage(message: any) {
    this.labelSource.next(message)
  }
}
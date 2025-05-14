import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeresesService {

  public szoSubject=new Subject()

  constructor() { }

  
}

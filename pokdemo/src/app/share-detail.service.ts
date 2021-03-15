import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDetailService {

  constructor() { }
  private detail = new Subject<string>();
  
  getDetail(){
    return this.detail;
  }

  setDetail(nextDetail : string){
    this.detail.next(nextDetail);
  }
}

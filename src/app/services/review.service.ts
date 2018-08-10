import { Injectable } from '@angular/core';
import{Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  errorMessage:any;
  constructor(private http: Http) { }

  handleError(e) {
    this.errorMessage=e.json().message;
    console.log('errorMessage is'+this.errorMessage)
    return Observable.throw(e.json().message);
  }

createReview(theNewReview){
  return this.http.post(`http://localhost:3000/review/create`, theNewReview, {withCredentials: true})
  .map(res => res.json())
  .catch(this.handleError);
}
}



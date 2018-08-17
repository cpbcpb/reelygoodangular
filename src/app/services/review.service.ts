import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class ReviewService {
  errorMessage: any;
  constructor(private http: Http) {}

  handleError(e) {
    this.errorMessage = e.json().message;
    console.log("errorMessage is" + this.errorMessage);
    return Observable.throw(e.json().message);
  }

  createReview(theNewReview) {
    return this.http
      .post(`${environment.baseurl}/review/create`, theNewReview, {
        withCredentials: true
      })
      .map(res => res.json())
      .catch(this.handleError);
  }

  createComment(theNewComment) {
    return this.http
      .post(`${environment.baseurl}/comment/commentcreate`, theNewComment, {
        withCredentials: true
      })
      .map(res => res.json())
      .catch(this.handleError);
  }

  getReview(reviewid) {
    return this.http
      .get(`${environment.baseurl}/review/withcomments/${reviewid}`, {
        withCredentials: true
      })
      .map(res => res.json())
      .catch(this.handleError);
  }
}

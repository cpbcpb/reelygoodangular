import { Injectable } from '@angular/core';
import{Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorMessage:any;

  constructor(private http: Http) { }
  movieAdding:any;
  // $push: { faveMovies: req.body.addFaveMovieId},
  handleError(e) {
    this.errorMessage=e.json().message;
    console.log('errorMessage is'+this.errorMessage)
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/user/signup`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/user/login`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/user/logout`, {}, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/user/loggedin`, {withCredentials: true})
      .map(res => {
        return JSON.parse((<any>res)._body)
      })
      .catch(this.handleError);
  }
  
  updateUser() {
    return this.http.post(`http://localhost:3000/user/updateuser`, {withCredentials: true})
    .map(res => res.json())
      .catch(this.handleError);
  }
  addwish(idObject) {
    return this.http.post(`http://localhost:3000/user/addwish`, idObject, {withCredentials: true})
    .map(res => res.json())
      .catch(this.handleError);
  }
  addfave(idObject) {
    return this.http.post(`http://localhost:3000/user/addfave`, idObject, {withCredentials: true})
    .map(res => res.json())
      .catch(this.handleError);
  }
  addseen(idObject) {
    return this.http.post(`http://localhost:3000/user/addseen`, idObject, {withCredentials: true})
    .map(res => res.json())
      .catch(this.handleError);
  }
  removewish(idObject) {
    return this.http.post(`http://localhost:3000/user/removewish`, idObject, {withCredentials: true})
    .map(res => res.json())
      .catch(this.handleError);
  }
  removefave(idObject) {
    return this.http.post(`http://localhost:3000/user/removefave`, idObject, {withCredentials: true})
    .map(res => res.json())
      .catch(this.handleError);
  }
  removeseen(idObject) {
    return this.http.post(`http://localhost:3000/user/removeseen`, idObject, {withCredentials: true})
    .map(res => res.json())
      .catch(this.handleError);
  }
  deleteUser(){
    return this.http.post(`http://localhost:3000/user/deleteuser`, {withCredentials: true})
    .map(res => res.json())
      .catch(this.handleError);

  }


}

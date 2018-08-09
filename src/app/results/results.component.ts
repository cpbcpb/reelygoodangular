import { Component, OnInit, Input, OnChanges} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {

  @Input() searchResults;

  signupUser:any={};
  theActualUser:any=null;
  loginUser:any={};
  theError:any;
  theMessage:any;
  idObject:any;

  constructor(private authService: AuthService) { }
  plot: boolean=false;

  togglePlot(){
    this.plot= !this.plot;
  }

  successCallback(userObject){
    this.theError=null;
    this.theMessage=null;
    this.checkIfLoggedIn()
  }
  successCallbackUser(userObject){
    this.theActualUser=userObject;
    this.theError=null;
    this.theMessage=null;
  }

  errorCallback(errorObject){
    this.theError=errorObject;
    this.checkIfLoggedIn()
  }

  errorCallbackUser(errorObject){
    this.theError=errorObject;
  }

  checkIfLoggedIn(){
    this.authService.isLoggedIn()
    .subscribe(
      (res)=> this.successCallbackUser(res)
    ),
    errorthing=>{this.errorCallbackUser(errorthing)}
  }


  favoriteMovie(searchedId){
    this.idObject={
      movieid: searchedId
    }
    console.log(this.idObject)
    this.authService.addfave(this.idObject)
    .subscribe(
      (res)=>
      this.successCallback(res)
    ),
    errorthing=>{this.errorCallback(errorthing)}
  }

  unfavoriteMovie(searchedId){
    this.idObject={
      movieid: searchedId
    }
    this.authService.removefave(this.idObject)
    .subscribe(
      (res)=>
      this.successCallback(res)
    ),
    errorthing=>{this.errorCallback(errorthing)}
  }

  seenMovie(searchedId){
    this.idObject={
      movieid: searchedId
    }
    console.log(this.idObject)
    this.authService.addseen(this.idObject)
    .subscribe(
      (res)=>
      this.successCallback(res)
    ),
    errorthing=>{this.errorCallback(errorthing)}
  }

  unseenMovie(searchedId){
    this.idObject={
      movieid: searchedId
    }
    this.authService.removeseen(this.idObject)
    .subscribe(
      (res)=>
      this.successCallback(res)
    ),
    errorthing=>{this.errorCallback(errorthing)}
  }
  wishlistMovie(searchedId){
    console.log("wishlist")
    this.idObject={
      movieid: searchedId
    }
    this.authService.addwish(this.idObject)
    .subscribe(
      (res)=>this.successCallback(res)
    ),
    errorthing=>{this.errorCallback(errorthing)}
  }

  unwishlistMovie(searchedId){
    this.idObject={
      movieid: searchedId
    }
    this.authService.removewish(this.idObject)
    .subscribe(
      (res)=>this.successCallback(res)
    ),
    errorthing=>{this.errorCallback(errorthing)}
  }
  ngOnInit() {
    this.checkIfLoggedIn()
  }

ngOnChanges(){
  this.checkIfLoggedIn()
}

}

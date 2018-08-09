import { Component, OnInit, OnChanges, Input} from '@angular/core';
import {MovieService} from '../services/movie.service'
import {Router, ActivatedRoute} from '@angular/router'
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-titlesearch',
  templateUrl: './titlesearch.component.html',
  styleUrls: ['./titlesearch.component.css']
})


export class TitlesearchComponent implements OnInit, OnChanges {
searchQuery:any={};
searchResults:Array<any>;

signupUser:any={};

theActualUser:any=null;
loginUser:any={};
theError:any;
theMessage:any;
advanced: boolean=false;
  constructor(private movieService: MovieService, 
    private authService: AuthService) { }



    successCallback(userObject){
      this.theActualUser=userObject;
      this.theError=null;
      this.theMessage=null;
      this.checkIfLoggedIn()
    }
    successCallback2(userObject){
      this.theActualUser=userObject;
      this.theError=null;
      this.theMessage=null;
    }
    errorCallback(errorObject){
      this.theError=errorObject;
      this.checkIfLoggedIn()
    }
    errorCallback2(errorObject){
      this.theError=errorObject;
    }
    checkIfLoggedIn(){
      this.authService.isLoggedIn()
      .subscribe(
        (res)=> this.successCallback2(res)
      ),
      errorthing=>{this.errorCallback2(errorthing)}
    }


  ngOnInit() {
    this.checkIfLoggedIn()
  }
  ngOnChanges() {
    this.checkIfLoggedIn()
  }
  toggleAdvanced(){
    this.advanced= !this.advanced;
  }
  titleSearch(){
    console.log("searchQuery"+this.searchQuery);
    this.movieService.titleSearch(this.searchQuery)
    .subscribe((response)=>{
      this.searchResults=response.results;
      console.log("response from db"+response)
      console.log("this.searchResults"+this.searchResults)
    })
  }

}

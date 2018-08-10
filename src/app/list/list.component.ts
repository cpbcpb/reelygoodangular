import { Component, OnInit, OnChanges } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms'
import {MovieService} from '../services/movie.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  signupUser:any={};
  theActualUser:any=null;
  loginUser:any={};
  theError:any;
  theMessage:any;
  theMovie:any=null;
  constructor(private activatedRoute: ActivatedRoute,
  private authService: AuthService, 
  private router: Router,
  private movieService:MovieService) { }
  successCallback(userObject){
    this.theActualUser=userObject;
    this.theError=null;
    this.theMessage=null;
    this.checkIfLoggedIn();
  }
  
  errorCallback(errorObject){
    this.theError=errorObject;
    this.checkIfLoggedIn();
  }
  successCallback2(userObject){
    this.theActualUser=userObject;
    this.theError=null;
    this.theMessage=null;

  }
  
  errorCallback2(errorObject){
    this.theError=errorObject;
  }
  
  checkIfLoggedIn(){
    this.authService.isLoggedIn()
    .subscribe(
      (res)=> this.successCallback2(res),
    ),
    errorthing=>{this.errorCallback2(errorthing)}
  }
  findById(thing){
    this.movieService.findOne(thing)
    .subscribe((res)=>{
      console.log('responsefromdb'+res)
    this.theMovie=res;
    }
  )
  }

  ngOnInit() {
    this.checkIfLoggedIn()
  }
  ngOnChanges() {
    this.checkIfLoggedIn()
  }
}

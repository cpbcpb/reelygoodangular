import { Component, OnInit, OnChanges } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnChanges {
  signupUser: any = {};
  theActualUser: any = null;
  loginUser: any = {};
  theError: any;
  theMessage: any;

  signup: boolean = false;

  constructor(private authService: AuthService) {}

  tryToSignUp() {
    console.log(this.signupUser);
    this.authService.signup(this.signupUser).subscribe(
      res => {
        this.successCallback(res);
      },
      errorthing => {
        this.errorCallback(errorthing);
      }
    );
  }

  toggleSignup() {
    this.signup = !this.signup;
  }
  tryToLogin() {
    this.authService.login(this.loginUser).subscribe(
      res => {
        this.successCallback(res);
      },
      errorthing => {
        this.errorCallback(errorthing);
      }
    );
  }
  logMeOut() {
    this.authService.logout().subscribe(res => {
      this.theActualUser = null;
    });
  }

  successCallback(userObject) {
    this.theActualUser = userObject;
    this.theError = null;
    this.theMessage = null;
    this.checkIfLoggedIn();
  }

  errorCallback(errorObject) {
    this.theError = errorObject;
    this.checkIfLoggedIn();
  }
  successCallback2(userObject) {
    this.theActualUser = userObject;
    this.theError = null;
    this.theMessage = null;
  }

  errorCallback2(errorObject) {
    this.theError = errorObject;
  }
  checkIfLoggedIn() {
    this.authService.isLoggedIn().subscribe(res => this.successCallback2(res)),
      errorthing => {
        this.errorCallback2(errorthing);
      };
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  ngOnChanges() {
    this.checkIfLoggedIn();
  }
}

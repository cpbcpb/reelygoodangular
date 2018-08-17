import { Component, OnChanges, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit, OnChanges {
  signupUser: any = {};
  theActualUser: any = null;
  loginUser: any = {};
  theError: any;
  theMessage: any;

  notLoggedIn: any;
  signup: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}
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
  logMeOut() {
    this.authService.logout().subscribe(res => {
      this.theActualUser = null;
      window.location.reload();
    });
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
  successCallbackUser(userObject) {
    this.theActualUser = userObject;
    this.theError = null;
    this.theMessage = null;
  }

  errorCallbackUser(errorObject) {
    this.theError = errorObject;
  }
  checkIfLoggedIn() {
    this.authService.isLoggedIn().subscribe(
      res => {
        this.theActualUser = res;
        this.theError = null;
        this.theMessage = null;
      },
      errorthing => {
        this.notLoggedIn = errorthing;
      }
    );
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }
  ngOnChanges() {}
}

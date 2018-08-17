import { Component, OnInit, OnChanges } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MovieService } from "../services/movie.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit, OnChanges {
  signupUser: any = {};
  theActualUser: any = null;
  loginUser: any = {};
  theError: any;
  theMessage: any;
  signup: boolean = false;
  notLoggedIn: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}
  logMeOut() {
    this.authService.logout().subscribe(res => {
      this.theActualUser = null;
      this.router.navigate([""]);
    });
  }
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
    this.notLoggedIn = errorObject;
  }

  checkIfLoggedIn() {
    this.authService.isLoggedIn().subscribe(res => this.successCallback2(res)),
      errorthing => {
        this.errorCallback2(errorthing);
      };
  }
  ngOnInit() {
    console.log("on init");
    this.checkIfLoggedIn();
  }
  ngOnChanges() {
    this.checkIfLoggedIn();
  }
}

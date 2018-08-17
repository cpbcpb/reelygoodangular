import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MovieService } from "../services/movie.service";
import { AuthService } from "../services/auth.service";
import { Location } from "@angular/common";
import { ReviewService } from "../services/review.service";
@Component({
  selector: "app-onemovie",
  templateUrl: "./onemovie.component.html",
  styleUrls: ["./onemovie.component.css"]
})
export class OnemovieComponent implements OnInit {
  theActualUser: any = {};
  loginUser: any = {};
  theError: any;
  theMessage: any;

  amovie: any;
  id: any;

  theMovie: any = null;
  toggleReviewForm: Boolean = false;
  toggleCommentForm: Boolean = false;
  usableId: Number = 0;
  newReview: any = {};
  newComment: any = {};
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private authService: AuthService,
    private location: Location,
    private reviewService: ReviewService
  ) {}

  getMovie(): void {
    const id2 = +this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id2);
    this.movieService.findOne(id2).subscribe(res => {
      this.theMovie = res;
      this.newReview = { tmdb: this.theMovie.movie.id };
    });
  }

  createAReview() {
    console.log("createAreview was clicked");
    console.log(this.newReview);
    this.reviewService.createReview(this.newReview).subscribe(
      res => {
        this.successCallback(res);
        this.getMovie();
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
    this.theError = errorObject;
  }
  checkIfLoggedIn() {
    this.authService.isLoggedIn().subscribe(res => this.successCallback2(res)),
      errorthing => {
        this.errorCallback2(errorthing);
      };
  }

  toggleReview() {
    this.toggleReviewForm = !this.toggleReviewForm;
  }
  toggleComment() {
    this.toggleCommentForm = !this.toggleCommentForm;
  }

  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.getMovie();
    this.checkIfLoggedIn();
  }
}

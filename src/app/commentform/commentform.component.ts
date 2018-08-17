import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MovieService } from "../services/movie.service";
import { AuthService } from "../services/auth.service";
import { Location } from "@angular/common";
import { ReviewService } from "../services/review.service";

@Component({
  selector: "app-commentform",
  templateUrl: "./commentform.component.html",
  styleUrls: ["./commentform.component.css"]
})
export class CommentformComponent implements OnInit {
  theActualUser: any = {};
  loginUser: any = {};
  theError: any;
  theMessage: any;
  theReview: any;
  amovie: any;
  id: any;
  theMovie: any = null;

  newComment: any = {};
  createAComment() {
    console.log("createAcomment was clicked");
    console.log(this.newComment);
    this.reviewService.createComment(this.newComment).subscribe(
      res => {
        this.successCallback(res);
        this.getReview();
        this.location.back();
      },

      errorthing => {
        this.errorCallback(errorthing);
      }
    );
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private authService: AuthService,
    private location: Location,
    private reviewService: ReviewService
  ) {}

  getReview(): void {
    const reviewId = this.activatedRoute.snapshot.paramMap.get("reviewid");
    console.log("reviewID", reviewId);
    this.reviewService.getReview(reviewId).subscribe(res => {
      this.theReview = res;
      this.getMovie(res.tmdb);
      this.newComment = {
        tmdb: res.tmdb,
        review: res._id
      };
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
  getMovie(thing): void {
    this.movieService.findOne(thing).subscribe(res => {
      this.theMovie = res;
    });
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

  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.getReview();
    this.checkIfLoggedIn();
  }
}

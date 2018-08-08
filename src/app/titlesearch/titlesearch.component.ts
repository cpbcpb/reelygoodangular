import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service'
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-titlesearch',
  templateUrl: './titlesearch.component.html',
  styleUrls: ['./titlesearch.component.css']
})


export class TitlesearchComponent implements OnInit {
searchQuery:any={};
searchResults:Array<any>;

advanced: boolean=false;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
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

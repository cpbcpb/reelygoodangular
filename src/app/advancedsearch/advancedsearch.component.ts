import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service'
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedsearchComponent implements OnInit {
  searchQuery:any={};
  searchResults:Array<any>;
  plot: boolean=false;
  newWithoutGenres: string;


  constructor(private movieService:MovieService) { }
  advancedSearch(){
    console.log(this.searchQuery)
    console.log("with"+this.searchQuery.with_genres)
    if(this.searchQuery.with_genres!=undefined && this.searchQuery.with_genres!=null){
    this.searchQuery.with_genres=this.searchQuery.with_genres.join()}
    if(this.searchQuery.without_genres!=undefined){
    this.searchQuery.without_genres=this.searchQuery.without_genres.join()}
    console.log(this.searchQuery)
    this.movieService.advancedSearch(this.searchQuery)
    .subscribe((response)=>{
      this.searchResults=response.results;
      console.log("response from db"+response)
      console.log("this.searchResults"+this.searchResults)
      this.searchQuery={}
    })
  }
  ngOnInit() {
  }

}

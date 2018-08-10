import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {MovieService} from '../services/movie.service'
import { findNode } from '../../../node_modules/@angular/compiler';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
amovie:any;
id:any;
@Input() id1: string;
theMovie:any=null;
  constructor(private router: Router, activatedRoute: ActivatedRoute,
  private movieService:MovieService) { }

  findById(thing){
    this.movieService.findOne(thing)
    .subscribe((res)=>{
      console.log('responsefromdb'+res)
    this.theMovie=res;
    }
  )
  }
  
  ngOnInit() {
 this.findById(this.id1)
    }
  }



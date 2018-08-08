import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() searchResults;
  constructor() { }
  plot: boolean=false;
  ngOnInit() {
  }
  togglePlot(){
    this.plot= !this.plot;
  }
}

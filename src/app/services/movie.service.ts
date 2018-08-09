import { Injectable } from '@angular/core';
import{Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: Http) { }
  searchQuery:any;
  searchResults:any;
  titleSearch(searchQuery){
    return this.http.post('http://localhost:3000/movies/titlesearch', searchQuery)
    .map((responseFromServer)=>responseFromServer.json())
  }
  advancedSearch(searchQuery){
    return this.http.post('http://localhost:3000/movies/filtersearch', searchQuery)
    .map((responseFromServer)=>responseFromServer.json())
  }
  findOne(id){
    return this.http.get(`http://localhost:3000/movies/find/${id}`)
    .map((responseFromServer)=>responseFromServer.json())
  }


}

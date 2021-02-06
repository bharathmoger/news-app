import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }
  
  newsApiUrl="http://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  toHeading():Observable<any>{
    return this.http.get(this.newsApiUrl);
  }
}


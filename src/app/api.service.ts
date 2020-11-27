import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_key = ""
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }

  getArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
}

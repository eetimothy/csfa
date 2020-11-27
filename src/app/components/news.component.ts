import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpParams, HttpClient } from '@angular/common/http';
import { CountryList, NewsArticles } from '../models'
import { NgNavigatorShareService } from 'ng-navigator-share'
import { ApiService } from '../api.service'
import { NewsDatabase } from '../news.database'


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsArticles: NewsArticles;
  source = ''
  author = ''
  title = ''
  description = ''
  url = ''
  apiKey = ''
  country = ''
  canShare = false
countryArticles = null;
  api: any;
  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private webShare: NgNavigatorShareService) { }

  ngOnInit(): void {
    this.api.getArticles().subscribe((data)=>{
      this.countryArticles = data;
      });
    /*
    this.canShare
    this.country = this.activatedRoute.snapshot.params['country']
    this.apiKey = this.activatedRoute.snapshot.params['apiKey']
    this. source = this.activatedRoute.snapshot.params['id + name']
    this.author = this.activatedRoute.snapshot.params['author']
    this.title = this.activatedRoute.snapshot.params['title']
    this.description = this.activatedRoute.snapshot.params['description']
    
    const url = `http://newsapi.org/v2/top-headlines?country=${this.country}&${this.apiKey}`

    let params = (new HttpParams()).set
    
    this.http.get<any>(url, {params: params})
    .toPromise()
    .then(resp => {
      const results = resp['articles'] as any []
      this.newsArticles = results.map(r => {
        return {
          author: r.['author'],
          title: r.['title'],
          description: r.['description'],

        }
      })
    })*/
  }

}

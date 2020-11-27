import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsDatabase } from '../news.database'
import { CountryList, NewsArticles } from '../models'
import { ApiService } from '../api.service'
import { HttpClient } from '@angular/common/http';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryData = null;
  constructor(private api:ApiService, private router: Router, private activatedRoute: ActivatedRoute, 
    private http: HttpClient, private webShare: NgNavigatorShareService) {}

  ngOnInit() {
    this.api.getCountries().subscribe((data)=>{
    this.countryData = data;
    });

    
  }
}

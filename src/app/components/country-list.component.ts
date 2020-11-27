import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsDatabase } from '../news.database'
import { CountryList, NewsArticles } from '../models'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryData = null;
  constructor(private api:ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getCountries().subscribe((data)=>{
    this.countryData = data;
});
}
}

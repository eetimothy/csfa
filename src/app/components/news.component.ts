import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpParams, HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,) { }

  ngOnInit(): void {
    //this.country = this.activatedRoute.snapshot.params['country']
    //const url = `https://`

  }

}

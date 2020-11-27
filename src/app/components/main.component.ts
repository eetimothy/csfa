import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpParams, HttpClient } from '@angular/common/http'
import { CountryList } from '../models'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

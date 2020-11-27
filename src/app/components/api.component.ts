import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { NewsDatabase } from '../news.database'
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiKey } from '../models';
import { HttpParams, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  form: FormGroup;
  apiArray: FormArray;

  constructor(private fb: FormBuilder, 
    private router: Router, private newsDB: NewsDatabase 
   ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      q: this.fb.control('', [Validators.required])
    })
    
  }

  saveApiKey() {
    this.router.navigate(['/country-list'])
  }

  goBack(){
    this.router.navigate(['/main'])
  }
  
}


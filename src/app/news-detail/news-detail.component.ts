import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NewsApiService } from '../service/news-api.service';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})

export class NewsDetailComponent implements OnInit {

  param1: string;
param2: string;
  newsData: any;
  newArray: any;

  constructor(private route: ActivatedRoute,
    private news:NewsApiService) { }
  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    debugger
    console.log(params)
    console.log(JSON.parse(params.page))
    this.newsData=JSON.parse(params.page)
    this.newArray=this.newsData.data;
    this.newArray.splice(this.newsData.index,1)
    this.newsData= this.newsData.data[this.newsData.index]
    
  }
  )
}
}
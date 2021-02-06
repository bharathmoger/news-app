import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';
import { RouterStateSnapshot,Router } from '@angular/router';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {
  orgArray: any;

  constructor(private service:NewsApiService, private router: Router) { 
    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
  }
  toHeaderDisplay:any=[];
  bookmark:any=[]
  searchText;


  ngOnInit(): void {
    this.service.toHeading().subscribe((result)=>{
      this.orgArray = result.articles;

      this.toHeaderDisplay =this.orgArray;

    })
  }
  addBookmark(data:any,index){
     let indexx = this.bookmark.indexOf(data);
    if(indexx == -1){
      this.bookmark.push(data);
    }
    else{
      this.bookmark.splice(indexx,1)

    }

  }

goToHome(){
    this.toHeaderDisplay=this.orgArray
  }

  goToBookmark(){
    this.toHeaderDisplay=this.bookmark
      }

  gotoDetail(data:any,index){
    event.stopPropagation();
  let obj={data:this.toHeaderDisplay,index:index}
  let a= JSON.stringify(obj)
  this.router.navigate(['details'],{ queryParams: { page: a}})
  }
}

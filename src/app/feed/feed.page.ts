import { LoginPage } from './../login/login.page';
import { AppService } from './../AppService';
import { Hero } from './../model/Hero';
import { Component, OnInit } from '@angular/core';
import {HEROES} from '../data/listHeroes';
import { Router }from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  image = '../assets/icon/bla.jpg';
  heroes: Hero[] = [];
  viewlist : boolean ;
  detailsPage =LoginPage ;

  userCount :number ;
  salaryCount :string ;
  
  constructor(private appsevice: HEROES, private router:Router) {
  }
  ngOnInit() {
    this.appsevice.arrSync.subscribe(c => {this.heroes = c;
      if (this.heroes.length>0){
        this.viewlist=true;
      }else{
        this.viewlist=false ;
      }
    });
    this.userCount=this.heroes.length;
    this.salaryCount="50"
    
        }

  func(hero:Hero){
    this.appsevice.delete(hero.cin);
  }

  godetail(hero:Hero){
    console.log(hero.cin);
    this.router.navigateByUrl('/details/'+hero.cin);
  }
}

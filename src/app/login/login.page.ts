import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute,Router} from '@angular/router'
import { HEROES } from './../data/listHeroes';
import { Hero } from '../model/Hero';
import { allResolved } from 'q';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  image = '../assets/icon/logo.png';
  name: string;
  cin : string;
  salary:string;
  arr: Hero[] = [];
  id:string ;
  hero:Hero ;
  constructor(private router:ActivatedRoute,private appsevice: HEROES,private router2 :Router) { }

  ngOnInit() {
    this.appsevice.arrSync.subscribe(c => {this.arr = c;});
    this.id=this.router.snapshot.paramMap.get('cin');
    this.hero=this.appsevice.getById(this.id);
    this.name=this.hero.name;
    this.cin=this.hero.cin;
    this.salary=this.hero.salary;
  }

  setData(){
    this.appsevice.setdata(new Hero(this.name,this.cin,this.salary))
    this.router2.navigateByUrl('/home');
  }

}
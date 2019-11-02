import { HEROES } from './../data/listHeroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/Hero';
import { allResolved } from 'q';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  image = '../assets/icon/logo.png';
  name: string;
  cin : string;
  salary:string="600";
  arr: Hero[] = [];


  constructor(private appsevice: HEROES) {

  }
  ngOnInit() {
   // this.appsevice.arrSync.subscribe(c => {this.arr = c;});
  }


  getHereos(){
    if (this.test()){
      console.log("success")
      this.appsevice.add(new Hero(this.name,this.cin,this.salary));
    }
   }

  test(){

    if((this.name==null)||(this.cin==null)||(this.salary==null)){
      alert("make sure not empty field");
      return false ;
    }else{
        if(this.name.length>2){
          return true ;
        }else{
          alert("name should be > 2")
          return false
        }
              
    }
  }


}
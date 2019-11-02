import { Hero } from '../model/Hero';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class HEROES {

  arr: Hero[] = [];
  arrSync: BehaviorSubject<Hero[]>;

  constructor() {
    this.arrSync = new BehaviorSubject(this.arr);
}

  add(hero:Hero) {
    this.arr.push(hero)
    this.arrSync.next(this.arr);
  }

  get(){
    return this.arr;
  }

  delete(cin :string){
    this.arr = this.arr.filter(item => item.cin != cin);
    this.arrSync.next(this.arr);
  }

  getById(cin:string) {
  return  this.arr.find(function(element) {
      return element.cin ==cin;
    });
  }

  setdata(hero:Hero) {
    
   this.arr.forEach(element => {
      if (element.cin==hero.cin){
        element.name=hero.name;
        element.salary=hero.salary;
        element.cin=hero.cin;
      }
   });
    this.arrSync.next(this.arr);
    console.log("**********");
    console.log(this.arr);
  

  }

}
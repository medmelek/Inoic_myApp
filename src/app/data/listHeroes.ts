import { Hero } from '../model/Hero';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HEROES {

  arr: Hero[] = [];
  salarcount :number=0;

  arrSync: BehaviorSubject<Hero[]>;
  salarcountsync:BehaviorSubject<number>;


  constructor() {
    this.arrSync = new BehaviorSubject(this.arr);
    this.salarcountsync=new BehaviorSubject(this.salarcount);
  }

  incrementSalary(salar:number){
    this.salarcount=this.salarcount+salar;
    this.salarcountsync.next(this.salarcount);
  }

  reCheckSlaryCount(){
    let somme :number =0 ;
    this.arr.forEach(element => {
       somme=somme+parseInt(element.salary);
    });
    this.salarcount=somme;
    this.salarcountsync.next(this.salarcount);
  }

  
  add(hero:Hero) {
    if(this.getById(hero.cin)!=null){
      alert("existing cin try anathor");
    }else{
      this.arr.push(hero)
      this.arrSync.next(this.arr);
      this.incrementSalary(parseInt(hero.salary));

}
   
  }

  get(){
    return this.arr;
  }

  delete(cin :string){
    this.arr = this.arr.filter(item => item.cin != cin);
    this.arrSync.next(this.arr);
    this.reCheckSlaryCount();
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
    this.reCheckSlaryCount();

 
  

  }

}
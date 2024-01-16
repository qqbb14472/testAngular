import { Component,inject } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // hero 是一个Hero, id 是1， name 是 windstorm
  // hero: Hero = {
  //   id:1,
  //   name:'Windstorm'
  // }

  //heroes=HEROES;
  //上面这行直接指向了 mock-heroes 的模拟数据，
  //改成了 数据从服务类传输

  constructor(private heroService: HeroService){}


  heroes : Hero[]  =[];

  
  // 这里只是定义了一个Hero对象，名字为被选中的英雄，没有被赋值
  selectedHero?: Hero;

  // 是否选中了一个，选中的话给上述的被选中的英雄赋值
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //异步调用

  getHeroes():void{
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
    .subscribe(heros => this.heroes = heros);
  }


  //加载这个ts时，调用 getHeroes 方法，链接到 heroService的getHeroes 方法

  ngOnInit():void{
    this.getHeroes();
  }





}

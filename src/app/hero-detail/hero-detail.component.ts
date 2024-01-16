import { Component, Input} from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  // 不能直接用 hero:Hero, @Input 因为外部的HeroesComponent 组件绑定了它
  // 在HeroesComponent html 中要定义  <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  // 没有其它属性，也没有展示逻辑。这个组件所做的只是通过 hero 属性接收一个英雄对象，并显示它。
  // 从HTML中 接收一个 hero，他是HERO类型
  @Input()hero?:Hero;

}

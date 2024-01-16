// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// 首先，app-routing.module.ts 会导入 RouterModule 和 Routes，以便该应用具有路由功能。配置好路由后，接着导入 HeroesComponent，它将告诉路由器要去什么地方。

// 注意，对 CommonModule 的引用和 declarations 数组不是必要的，因此它们不再是 AppRoutingModule 的一部分。以下各节将详细介绍 AppRoutingModule 的其余部分。

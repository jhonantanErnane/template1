import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuPage } from './side-menu/side-menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SideMenuPage,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideMenuRoutingModule { }

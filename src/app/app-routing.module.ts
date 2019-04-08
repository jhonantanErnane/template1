import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingPageModule'
  },
  {
    path: 'login',
    loadChildren: './landing/login/login.module#LoginPageModule'
  },
  {
    path: 'main',
    loadChildren: './side-menu/side-menu.module#SideMenuModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

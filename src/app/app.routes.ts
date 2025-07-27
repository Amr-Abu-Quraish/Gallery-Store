import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
  path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'Home',
  },


  {
   path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.component').then((m) => m.CartComponent),
        title: 'Home',
  },
 {
        path:"details/:id",loadComponent:()=> import('./pages/details/details.component').then(
          (m)=>m.DetailsComponent,

        ),


        title:'Details'
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/notfound/notfound.component').then(
            (m) => m.NotfoundComponent
          ),
      },
];

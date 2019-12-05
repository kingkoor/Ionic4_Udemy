import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)},
  { path: 'places', loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)},
  { path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)},
];
// const routes: Routes = [
//   { path: '', redirectTo: 'places', pathMatch: 'full' },
//   { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
//   { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
//   { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

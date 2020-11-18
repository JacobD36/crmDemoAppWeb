import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',
    canActivate: [AuthGuard],
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./navigate/navigate.module').then(m => m.NavigateModule)
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

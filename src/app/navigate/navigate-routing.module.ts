import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JaimeComponent } from './jaime/jaime.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path: '',
    component: JaimeComponent
  },
  {
    path: 'template',
    component: JaimeComponent
  },
  {
    path: 'reactive',
    component: ReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigateRoutingModule { }

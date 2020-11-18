import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavigateRoutingModule } from './navigate-routing.module';
import { JaimeComponent } from './jaime/jaime.component';
import { ReactiveComponent } from './reactive/reactive.component';


@NgModule({
  declarations: [JaimeComponent, ReactiveComponent],
  imports: [
    CommonModule,
    NavigateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class NavigateModule { }

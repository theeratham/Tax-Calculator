import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDetailComponent } from './input-detail/input-detail/input-detail.component';
import { ReviewConfirmComponent } from './review&Confirm/review-confirm/review-confirm.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/input-detail', pathMatch: 'full'
  },
  {
    path: 'input-detail',
    component: InputDetailComponent
  },
  {
    path: 'review&Confirm',
    component: ReviewConfirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

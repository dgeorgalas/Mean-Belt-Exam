import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
// import { ErrorComponent } from './error/error.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    {
      path: 'new',
      component: NewComponent
    },
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'edit/:id',
      component: EditComponent
    },
    {
      path: 'detail/:id',
      component: DetailComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

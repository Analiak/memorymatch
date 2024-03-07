import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ModalityComponent } from './components/views/modality/modality.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Modality', component: ModalityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

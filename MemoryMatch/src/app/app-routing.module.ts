import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
//import { InstructionsComponent } from './components/no-shared/modality/instructions/instructions.component';
//import { GameModeComponent } from './components/no-shared/modality/game-mode/game-mode.component';
//import { WindowModalComponent } from './components/no-shared/modality/window-modal/window-modal.component';
import { ModalityComponent } from './components/views/modality/modality.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'modality', component: ModalityComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

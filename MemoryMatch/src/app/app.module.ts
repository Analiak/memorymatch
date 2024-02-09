import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { ModalityComponent } from './components/views/modality/modality.component';
import { GameComponent } from './components/views/game/game.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { SimpsonFamilyCloudComponent } from './components/shared/simpson-family-cloud/simpson-family-cloud.component';
import { LogoHomeComponent } from './components/shared/logo-home/logo-home.component';
import { InputButtonComponent } from './components/no-shared/home/input-button/input-button.component';
import { WelcomeMessageComponent } from './components/no-shared/home/welcome-message/welcome-message.component';
import { NextButtonComponent } from './components/no-shared/home/next-button/next-button.component';
import { InstructionsComponent } from './components/no-shared/modality/instructions/instructions.component';
import { GameModeComponent } from './components/no-shared/modality/game-mode/game-mode.component';
import { ShuffleComponent } from './components/no-shared/game/shuffle/shuffle.component';
import { CardComponent } from './components/no-shared/game/card/card.component';
import { TimerComponent } from './components/no-shared/game/timer/timer.component';
import { EndgameModalComponent } from './components/no-shared/game/endgame-modal/endgame-modal.component';
import { RestartButtonComponent } from './components/no-shared/game/restart-button/restart-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalityComponent,
    GameComponent,
    LogoComponent,
    SimpsonFamilyCloudComponent,
    LogoHomeComponent,
    InputButtonComponent,
    WelcomeMessageComponent,
    NextButtonComponent,
    InstructionsComponent,
    GameModeComponent,
    ShuffleComponent,
    CardComponent,
    TimerComponent,
    EndgameModalComponent,
    RestartButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

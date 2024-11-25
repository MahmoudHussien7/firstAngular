import { AddGameComponent } from './add-game/add-game.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: GamesComponent },
  {
    path: 'contact-us',
    component: ContactusComponent,
  },
  {
    path: 'add-game',
    component: AddGameComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

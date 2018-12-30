import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { CanActivateGuard } from './can-activate.guard';
import { LibroeditComponent } from './libroedit/libroedit.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cerca', component: RicercaComponent },
  { path: 'inserisci', component: InserimentoComponent, canActivate: [CanActivateGuard] },
  { path: 'edit/:n', component: LibroeditComponent, canActivate: [CanActivateGuard]},
  { path: '', redirectTo: 'cerca', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
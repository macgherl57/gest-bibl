import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { CanActivateGuard } from './can-activate.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'cerca', component: RicercaComponent, canActivate: [CanActivateGuard] },
  { path: 'inserisci', component: InserimentoComponent, canActivate: [CanActivateGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

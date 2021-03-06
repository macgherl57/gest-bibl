import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { CanActivateGuard } from './can-activate.guard';
import { LibroeditComponent } from './libroedit/libroedit.component';
import { VisualizzaPrestitiComponent } from './visualizza-prestiti/visualizza-prestiti.component';
import { ModificaPrestitoComponent } from './modifica-prestito/modifica-prestito.component';
import { InserisciPrestitoComponent } from './inserisci-prestito/inserisci-prestito.component';
import { VisualizzaRestituitiComponent } from './visualizza-restituiti/visualizza-restituiti.component';
import { ElencoRivisteComponent } from './elenco-riviste/elenco-riviste.component';
import { GestisciRivistaComponent } from './gestisci-rivista/gestisci-rivista.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cerca', component: RicercaComponent },
  { path: 'inserisci', component: InserimentoComponent, canActivate: [CanActivateGuard] },
  { path: 'edit/:n', component: LibroeditComponent, canActivate: [CanActivateGuard]},
  { path: 'modprestito/:id/:i', component: ModificaPrestitoComponent, canActivate: [CanActivateGuard]},
  { path: 'prestiti', component: VisualizzaPrestitiComponent, canActivate: [CanActivateGuard]},
  { path: 'insprestito/:n', component: InserisciPrestitoComponent, canActivate: [CanActivateGuard]},
  { path: 'prestitirest', component: VisualizzaRestituitiComponent, canActivate: [CanActivateGuard]},
  { path: 'elencoriviste', component: ElencoRivisteComponent, canActivate: [CanActivateGuard]},
  { path: 'gestiscirivista', component: GestisciRivistaComponent, canActivate: [CanActivateGuard]},
  { path: '', redirectTo: 'cerca', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

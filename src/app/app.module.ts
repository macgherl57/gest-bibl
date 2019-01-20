import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbTooltipModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LibrodetailComponent } from './librodetail/librodetail.component';
import { LibroeditComponent } from './libroedit/libroedit.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { VisualizzaPrestitiComponent } from './visualizza-prestiti/visualizza-prestiti.component';
import { ModificaPrestitoComponent } from './modifica-prestito/modifica-prestito.component';
import { InserisciPrestitoComponent } from './inserisci-prestito/inserisci-prestito.component';
import { VisualizzaRestituitiComponent } from './visualizza-restituiti/visualizza-restituiti.component';
import { ElencoRivisteComponent } from './elenco-riviste/elenco-riviste.component';
import { GestisciRivistaComponent } from './gestisci-rivista/gestisci-rivista.component';
import { ElencoRivChildComponent } from './elenco-riviste/elenco-riv-child/elenco-riv-child.component';
import { GestisciRivChildComponent } from './gestisci-rivista/gestisci-riv-child/gestisci-riv-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RicercaComponent,
    InserimentoComponent,
    LibrodetailComponent,
    LibroeditComponent,
    ConfirmationDialogComponent,
    VisualizzaPrestitiComponent,
    ModificaPrestitoComponent,
    InserisciPrestitoComponent,
    VisualizzaRestituitiComponent,
    ElencoRivisteComponent,
    GestisciRivistaComponent,
    ElencoRivChildComponent,
    GestisciRivChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbTooltipModule
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [LibrodetailComponent, ConfirmationDialogComponent]

})
export class AppModule { }

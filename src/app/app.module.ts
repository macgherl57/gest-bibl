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
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LibrodetailComponent } from './librodetail/librodetail.component';
import { LibroeditComponent } from './libroedit/libroedit.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { VisualizzaPrestitiComponent } from './visualizza-prestiti/visualizza-prestiti.component';
import { ModificaPrestitoComponent } from './modifica-prestito/modifica-prestito.component';

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
    ModificaPrestitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbDropdownModule
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [LibrodetailComponent, ConfirmationDialogComponent]

})
export class AppModule { }

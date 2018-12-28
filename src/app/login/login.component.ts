import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthsessService } from '../authsess.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  private validation: Array<Object> = [];
  private studente_id: Number;
  public error: Boolean = false;
  private errorMsg: String;

  constructor(private apiService: ApiService, private sessionService: AuthsessService,
              private router: Router) { }

  ngOnInit() {
  }
  public validate(loginForm) {
    this.apiService.validate(loginForm).subscribe((data: Array<Object>) => {
      this.validation = data["data"];
      this.studente_id = this.validation[0]["id"];
      if (this.studente_id > 0) {
        // this.sessionService.classe = this.validation[0]["classe"];
        this.sessionService.studente_id = this.studente_id;
        this.sessionService.username = loginForm.username;
        //console.log('Printing parameters to session: ' + this.sessionService.studente_id + '; ' + this.sessionService.allowed);
        this.apiService.isUserLoggedIn.next(true);
        this.router.navigate(['cerca']);
      } else {
        this.error = true;
        this.errorMsg = "Utente non trovato o password errata. Riprova!";
      }
    });
  }
}

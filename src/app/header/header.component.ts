import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public is_signedin: Boolean;
  title = 'Gestione Biblioteca';

  constructor(private apiService: ApiService, private _route: Router) {
    this.apiService.isUserLoggedIn.subscribe(value => { this.is_signedin = value});
  }

  ngOnInit() {
    
  }

  public doLogout() {
    this.apiService.doSignOut();
    this.apiService.isUserLoggedIn.next(false);
    this._route.navigate(['login']);
  }
  public openPage() {
    this._route.navigate(['prestiti']);
  }
  public openRest() {
    this._route.navigate(['prestitirest']);
  }
}

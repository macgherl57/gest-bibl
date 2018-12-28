import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthsessService } from './authsess.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private sessionService: AuthsessService) { }
  API_URL = 'https://liceoberchet.gov.it:3306';
  public isUserLoggedIn = new BehaviorSubject<Boolean>(false);
  
  public validate(loginForm: Object) {
    return this.httpClient.post(`${this.API_URL}/validate`, loginForm);
  }
  public isSignedIn() {
    return !!this.sessionService.studente_id;
  }
  public doSignOut() {
    this.sessionService.destroy();
  }
  public getLibri(ricerca: string): Observable<Libro[]> {
    ricerca = ricerca.trim();
    return this.httpClient.get<Libro[]>(`${this.API_URL}/search/` + ricerca);
  }
  public getColumns()  {
    return this.httpClient.get<Object[]>(`${this.API_URL}/showcolumns`);
  }
  public insertBook(inserimForm: Object) {
    return this.httpClient.post(`${this.API_URL}/insert`, inserimForm);
  }
  public getLibroDetail(n: number)  {
    return this.httpClient.get(`${this.API_URL}/libro/` + n);
  }
}

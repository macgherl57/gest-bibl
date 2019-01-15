import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthsessService } from './authsess.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Libro, Prestito, PrestitoRow, RetrievedRow } from './libro';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private sessionService: AuthsessService) { }
  
  API_URL = 'http://localhost:3000/biblioteca';
  public isUserLoggedIn = new BehaviorSubject<Boolean>(false);
  public libriSearch = new BehaviorSubject<Libro[]>([]);
  public currentPage = new BehaviorSubject<number>(0);
  public schedarioSave = new BehaviorSubject<Prestito[]>([]);

  public validate(loginForm: Object) {
    return this.httpClient.post(`${this.API_URL}/validate`, loginForm);
  }
  public isSignedIn() {
    return !!this.sessionService.studente_id;
  }
  public doSignOut() {
    window.localStorage.removeItem('token');
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
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this.httpClient.post(`${this.API_URL}/insert`, inserimForm, httpOptions);
  }
  public getLibroDetail(n: number)  {
    return this.httpClient.get<Libro>(`${this.API_URL}/libro/` + n);
  }
  public editLibro(n: number, editForm: Libro) {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this.httpClient.put(`${this.API_URL}/edit/` + n, editForm, httpOptions);
  }
  public deleteLibro(n: number) {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this.httpClient.delete(`${this.API_URL}/edit/` + n, httpOptions);
  }
  public getUnretLoans() {
    return this.httpClient.get<Prestito[]>(`${this.API_URL}/prestiti`);
  }
  public getRetLoans() {
    let options =  new HttpParams().set('rest','y'); 
    return this.httpClient.get<Prestito[]>(`${this.API_URL}/prestiti`, {params: options});
  }
  public getPrestito(id: number) {
    return this.httpClient.get<RetrievedRow>(`${this.API_URL}/prestito/` + id);
  }
  public modPrestito(id: number, row: PrestitoRow) {
    return this.httpClient.put<PrestitoRow>(`${this.API_URL}/prestito/` + id, row);
  }
  public getClassi() {
    return this.httpClient.get<string[]>(`${this.API_URL}/classi`);
  }
  public getPersone(cl: string) {
    return this.httpClient.get<Object[]>(`${this.API_URL}/cognomenome/` + cl);
  }
  public insPrest(prestitoRow: PrestitoRow) {
    return this.httpClient.post(`${this.API_URL}/insprest`, prestitoRow);
  }
}

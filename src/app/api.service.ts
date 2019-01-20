import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthsessService } from './authsess.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Libro, Prestito, PrestitoRow, RetrievedRow } from './libro';
import { Riviste, Rivista } from './riviste';

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
  public allRiv = new BehaviorSubject<Riviste[]>([]);

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
    //no token
    ricerca = ricerca.trim();
    return this.httpClient.get<Libro[]>(`${this.API_URL}/search/` + ricerca);
  }
  public getColumns()  {
    //no token
    return this.httpClient.get<Object[]>(`${this.API_URL}/showcolumns`);
  }
  public insertBook(inserimForm: Object) {
    return this.httpClient.post(`${this.API_URL}/insert`, inserimForm, this.sendHeaders());
  }
  public getLibroDetail(n: number)  {
    //no token
    return this.httpClient.get<Libro>(`${this.API_URL}/libro/` + n);
  }
  public editLibro(n: number, editForm: Libro) {
    return this.httpClient.put(`${this.API_URL}/edit/` + n, editForm, this.sendHeaders());
  }
  public deleteLibro(n: number) {
    return this.httpClient.delete(`${this.API_URL}/edit/` + n, this.sendHeaders());
  }
  public getUnretLoans() {
    return this.httpClient.get<Prestito[]>(`${this.API_URL}/prestiti`, this.sendHeaders());
  }
  public getRetLoans() {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let options =  new HttpParams().set('rest','y'); 
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }), params: options };
    return this.httpClient.get<Prestito[]>(`${this.API_URL}/prestiti`, httpOptions);
  }
  public getPrestito(id: number) {
    return this.httpClient.get<RetrievedRow>(`${this.API_URL}/prestito/` + id, this.sendHeaders());
  }
  public modPrestito(id: number, row: PrestitoRow) {
    return this.httpClient.put<PrestitoRow>(`${this.API_URL}/prestito/` + id, row, this.sendHeaders());
  }
  public getClassi() {
    //no token
    return this.httpClient.get<string[]>(`${this.API_URL}/classi`);
  }
  public getPersone(cl: string) {
    //no token
    return this.httpClient.get<Object[]>(`${this.API_URL}/cognomenome/` + cl);
  }
  public insPrest(prestitoRow: PrestitoRow) {
    return this.httpClient.post(`${this.API_URL}/insprest`, prestitoRow, this.sendHeaders());
  }
  public allRiviste() {
    return this.httpClient.get<Riviste[]>(`${this.API_URL}/allriviste`, this.sendHeaders());
  }
  public insertRiv(form: Riviste) {
    return this.httpClient.post(`${this.API_URL}/insertriv`, form, this.sendHeaders());
  }
  public getSameriv(id: number) {
    return this.httpClient.get<Rivista[]>(`${this.API_URL}/getsameriv/` + id, this.sendHeaders());
  }
  public addRiv(form: Rivista) {
    return this.httpClient.post(`${this.API_URL}/addriv`, form, this.sendHeaders());
  }
  public sendHeaders() :object {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return httpOptions;
  }
}

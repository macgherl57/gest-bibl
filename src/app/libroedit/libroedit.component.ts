import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../libro';

@Component({
  selector: 'app-libroedit',
  templateUrl: './libroedit.component.html',
  styleUrls: ['./libroedit.component.scss']
})
export class LibroeditComponent implements OnInit {

  public rows: string[];
  public libro: Libro;
  public n: number;
  public is_success: boolean = false;
  private libriSearch: Libro[] = [];
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getLibro();
  }
  
  public getLibro() {
    this.n = +this.activatedRoute.snapshot.paramMap.get('n');
    this.apiService.getLibroDetail(this.n).subscribe(data => {
      this.libro = data;
      this.rows = Object.keys(this.libro);
      this.rows.sort();
    });
  }

  onsubmit(editForm: Libro, n: number) {
    // console.log(editForm);
    this.apiService.editLibro(n, editForm).subscribe(res => {
      console.log(res['data']);
      if (res['data'] == 1) {
        this.is_success = true;
      }
    });
    this.apiService.libriSearch.subscribe(libri => { this.libriSearch = libri });
    let newSearch: Array<Libro> = [];
    this.libriSearch.forEach(libro => {
      if (libro.N === n) {
        editForm.N = n;
        newSearch.push(editForm);
      } else {
        newSearch.push(libro)
      }
    });
    console.log(newSearch);
    this.apiService.libriSearch.next(newSearch);
  }
}

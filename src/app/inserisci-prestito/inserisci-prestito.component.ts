import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Libro } from '../libro';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-inserisci-prestito',
  templateUrl: './inserisci-prestito.component.html',
  styleUrls: ['./inserisci-prestito.component.scss']
})
export class InserisciPrestitoComponent implements OnInit {

  classe: string;
  arr: string[] = [];
  persona: string;
  persone: Object[];
  libro: Libro;
  libri: Libro[];
  
  get personae(): Object[] {
    return this.persone;
  }

  constructor(private apiservice: ApiService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.apiservice.getClassi().subscribe(res => {
      this.arr.push('Docente','Personale Ata');
      res.forEach(el => {
        this.arr.push(el);
      });
    });
    this.getLibroData();
  }
  
  public getPersone() {
    this.apiservice.getPersone(this.classe).subscribe(res => {
      this.persone = res;
      });
  }

  public getLibroData() {
    let n = +this.router.snapshot.paramMap.get('n');
    this.apiservice.libriSearch.subscribe(res => { this.libri = res });
    this.libri.forEach(l => {
      if (l.N === n ) {
        this.libro = l;
      }
    })
  }
}

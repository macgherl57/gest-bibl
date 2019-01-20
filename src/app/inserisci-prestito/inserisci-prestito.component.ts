import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Libro, PrestitoRow, Prestito } from '../libro';
import { ActivatedRoute, Router} from '@angular/router';
import  * as moment  from 'moment';


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
  displayMsg: boolean = false;
  n: number;
  index: number;
  prestito_id: number;
  allPrest: Array<Prestito> = [];
  errDisplay: boolean = false;

  get personae(): Object[] {
    return this.persone;
  }

  constructor(private apiService: ApiService, private router: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.n = +this.router.snapshot.paramMap.get('n');
    //console.log('inside ngOninit(): n = :'+this.n);
    this.checkIfPrestito();
    this.populateSelect();
    this.getLibroData();
  }
  
  public checkIfPrestito() {
    this.apiService.getUnretLoans().subscribe(res => { 
      this.allPrest = res;
      //console.log('Inside checkIfPrestito: ' + this.allPrest.length + ' n= ' + this.n);
      this.allPrest.forEach((obj, i) => {
        if (obj.Schedario['N'] === this.n) {
          this.index = i;
          this.prestito_id = obj.id;
          this.displayMsg = true;
        }
      });
      //console.log('Length inside checkIf...: ' + this.allPrest.length);
      this.apiService.schedarioSave.next(this.allPrest);
    });
  }
  public populateSelect() {
    this.apiService.getClassi().subscribe(res => {
      this.arr.push('Docente','Personale Ata');
      res.forEach(el => {
        this.arr.push(el);
      });
    });
  }
  public getPersone() {
    this.apiService.getPersone(this.classe).subscribe(res => {
      this.persone = res;
      });
  }
  public getLibroData() {
    //console.log('Inside get Libro: '+this.n);
    this.apiService.libriSearch.subscribe(res => { this.libri = res });
    this.libri.forEach(l => {
      if (l.N === this.n ) {
        this.libro = l;
        //console.log('Questo libro: ', this.libro);
      }
    });
  }
  public onsubmit(insprestForm) {
    //console.log('Form object: ', insprestForm);
    let newPrestitoRow: PrestitoRow = {
      id: null,
      student_id: insprestForm['cognome_nome'],
      book_id: this.libro.N,
      data_prelievo: moment(insprestForm['data_prelievo'], 'DD/MM/YYYY').toDate(),
      data_1_rinnovo: null,
      data_2_rinnovo: null,
      data_restituzione: null,
      data_1_soll: null,
      data_2_soll: null,
      note: insprestForm['note']
    }
    this.apiService.insPrest(newPrestitoRow).subscribe(res => {
      if (res['error']) {
        this.errDisplay = true;
      }
    });
    this.apiService.getUnretLoans().subscribe(prestiti => {
      this.apiService.schedarioSave.next(prestiti);
    });
    this._router.navigate(['prestiti']);
  }
}

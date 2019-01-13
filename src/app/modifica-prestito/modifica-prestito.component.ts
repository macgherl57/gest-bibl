import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RetrievedRow, PrestitoRow } from '../libro';
import  * as moment  from 'moment';

@Component({
  selector: 'app-modifica-prestito',
  templateUrl: './modifica-prestito.component.html',
  styleUrls: ['./modifica-prestito.component.scss']
})
export class ModificaPrestitoComponent implements OnInit {

  public row: RetrievedRow;
  public isFormReady: boolean = false;
  public tipologia: string;
  public cognome_e_nome: string;
  public Schedario: object;
  public updateMsg: boolean = false;
  constructor(private apiService: ApiService, private _router: ActivatedRoute, private route: Router) { }
  
  ngOnInit() {
    this.getPrestito();
  }

  public formatDate() {
    let date = moment(this.row.prestito['data_prelievo']);
    let str = date.format('DD/MM/YYYY').toString();
    console.log(str);
  }

  public getPrestito() {
    let id = +this._router.snapshot.paramMap.get('id');
    let i = +this._router.snapshot.paramMap.get('i');
    this.apiService.getPrestito(id).subscribe(data => {
      this.row = data;
      this.row.prestito['data_prelievo'] = moment(this.row.prestito['data_prelievo']).format('DD/MM/YYYY').toString();
      if (data.Studente != null) {
        this.cognome_e_nome = data.Studente['cogn_nome'];
        this.tipologia = data.Studente['cl'];
      } else {
        this.cognome_e_nome = data.Prof['cogn'] + ' ' + data.Prof['nome'];
        this.tipologia = 'Docente';
      }
      this.isFormReady = true;
      this.apiService.schedarioSave.subscribe(result => { this.Schedario = result[i].Schedario});
    });
    ;
  }
  public onsubmit(modPrestForm) {
    let newPrestitoRow: PrestitoRow = {
    id: this.row.prestito['id'],
    student_id: this.row.prestito['student_id'],
    book_id: this.row.prestito['book_id'],
    data_prelievo: this.row.prestito['data_prelievo'],
    data_1_rinnovo: this.row.prestito['data_1_rinnovo'],
    data_2_rinnovo: this.row.prestito['data_2_rinnovo'],
    data_restituzione: this.row.prestito['data_restituzione'],
    data_1_soll: this.row.prestito['data_1_soll'],
    data_2_soll: this.row.prestito['data_2_soll'],
    note: this.row.prestito['note']
    }
    this.apiService.modPrestito(newPrestitoRow.id, newPrestitoRow).subscribe(result => {
      if (!result['error']) {
        this.updateMsg = true;
        this.route.navigate(['prestiti']);
      }
    });
    console.log(newPrestitoRow);
  }
}

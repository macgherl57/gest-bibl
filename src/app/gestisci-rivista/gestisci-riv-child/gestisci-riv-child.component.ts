import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rivista } from '../../riviste';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-gestisci-riv-child',
  templateUrl: './gestisci-riv-child.component.html',
  styleUrls: ['./gestisci-riv-child.component.scss']
})
export class GestisciRivChildComponent implements OnInit {

  @Input()
  rivista_id: number;
  @Input()
  titolo: string;
  @Output()
  whatever: EventEmitter<number> = new EventEmitter<number>();
  public anno: string;
  public periodicita: string;
  public annata: number;
  public numero_fasc: number;
  public data_di_arrivo: Date;
  public note: string;
  public manca: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  public onsubmit(form: Rivista) {
    form.rivista_id = this.rivista_id;
    this.apiService.addRiv(form).subscribe(res => {
      if (!res['error']) {
        // for now
        //console.log(res['data']);
      }
    });
    this.whatever.emit(this.rivista_id);
  }
}

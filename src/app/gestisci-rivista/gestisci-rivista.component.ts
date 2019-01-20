import { Component, OnInit } from '@angular/core';
import { Rivista, Riviste } from '../riviste';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gestisci-rivista',
  templateUrl: './gestisci-rivista.component.html',
  styleUrls: ['./gestisci-rivista.component.scss'],
  
})
export class GestisciRivistaComponent implements OnInit {

  public rivista: Rivista[];
  public riviste: Riviste[];
  public id: number = null;
  public titolo: string;
  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.allRiviste().subscribe(res => {
      this.riviste = res;
      this.apiService.allRiv.next(this.riviste);
    });
  }
  
  onchange(id: number) {
    this.apiService.getSameriv(id).subscribe(res => {
      this.rivista = res;
    });
    this.apiService.allRiv.subscribe(all => {
      all.forEach(r => {
        if (r.id == this.id) {
          this.titolo = r.titolo;
        }
      })
    });
  }

  testmethod(rivista_id: number) {
   this.id = null;
   this.onchange(rivista_id);
   this.id = rivista_id;
   //console.log('Did reset id!')
  }
}

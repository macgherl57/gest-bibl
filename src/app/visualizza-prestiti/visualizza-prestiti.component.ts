import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Prestito } from '../libro';

@Component({
  selector: 'app-visualizza-prestiti',
  templateUrl: './visualizza-prestiti.component.html',
  styleUrls: ['./visualizza-prestiti.component.scss']
})
export class VisualizzaPrestitiComponent implements OnInit {

  public data: Array<Prestito>;

  constructor(private apiService: ApiService) { }
  /*
  ngOnInit() {
    this.apiService.schedarioSave.subscribe(w => {
      if (w.length > 0) {
        this.data = w;
      } else {
        this.getPrestiti();
      }
    })
  }
  */
  ngOnInit() {
    this.getPrestiti();
  }

  public getPrestiti() {
      this.apiService.getUnretLoans().subscribe((res: Prestito[]) => {
        this.data = res;
        this.apiService.schedarioSave.next(res);
      });
    }
}

import { Component, OnInit } from '@angular/core';
import { Prestito } from '../libro';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visualizza-restituiti',
  templateUrl: './visualizza-restituiti.component.html',
  styleUrls: ['./visualizza-restituiti.component.scss']
})
export class VisualizzaRestituitiComponent implements OnInit {

  public data: Array<Prestito>;

  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
    this.getPrestiti();
  }
  
    public getPrestiti() {
      this.apiService.getRetLoans().subscribe((res: Prestito[]) => {
        this.data = res;
      });
    }

}

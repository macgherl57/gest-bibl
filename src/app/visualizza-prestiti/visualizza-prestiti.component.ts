import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visualizza-prestiti',
  templateUrl: './visualizza-prestiti.component.html',
  styleUrls: ['./visualizza-prestiti.component.scss']
})
export class VisualizzaPrestitiComponent implements OnInit {

  public data: Array<Object>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPrestiti();
  }

    public getPrestiti() {
      this.apiService.getUnretLoans().subscribe(res => {
        this.data = res;
        console.log(this.data);
      });
    }
}

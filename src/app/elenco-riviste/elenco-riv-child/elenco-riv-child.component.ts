import { Component, OnInit, Input } from '@angular/core';
import { Riviste } from 'src/app/riviste';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-elenco-riv-child',
  templateUrl: './elenco-riv-child.component.html',
  styleUrls: ['./elenco-riv-child.component.scss']
})
export class ElencoRivChildComponent implements OnInit {

  @Input()
  id: number;
  public titolo: string;
  public anno: number;
  public displayMsg: boolean = false;

  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  public onsubmit(form: Riviste) {
    this.apiService.insertRiv(form).subscribe(res => {
      if (!res['error']) {
        this.displayMsg = true;
      }
    })
  }
}

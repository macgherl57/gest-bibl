import { Component, OnInit, Input } from '@angular/core';
import { Riviste } from 'src/app/riviste';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elenco-riv-child',
  templateUrl: './elenco-riv-child.component.html',
  styleUrls: ['./elenco-riv-child.component.scss']
})
export class ElencoRivChildComponent implements OnInit {

  @Input()
  id: number;
  titolo: string;
  anno: number
  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  public onsubmit(form: Riviste) {
    this.apiService.insertRiv(form).subscribe(res => {
      if (!res['error']) {
        this.router.navigate(['cerca']);
      }
    })
  }
}

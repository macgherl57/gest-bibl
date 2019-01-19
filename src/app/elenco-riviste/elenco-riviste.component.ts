import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Riviste } from '../riviste';

@Component({
  selector: 'app-elenco-riviste',
  templateUrl: './elenco-riviste.component.html',
  styleUrls: ['./elenco-riviste.component.scss']
})
export class ElencoRivisteComponent implements OnInit {

  public rivArr :Riviste[];
  public newN: number;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllriviste();
  }

  public getAllriviste() {
    this.apiService.allRiviste().subscribe(res => {
      this.rivArr = res;
      let ids: Array<number> = [];
      this.rivArr.forEach(riv => {
        ids.push(riv.id)
      });
      ids.sort((a, b) => a - b);
      this.newN = ids[ids.length-1] + 1;
      // console.log('rivArr is: ', this.rivArr, '\nids is: ', ids, 'newN: ', this.newN);
    });
  }
}

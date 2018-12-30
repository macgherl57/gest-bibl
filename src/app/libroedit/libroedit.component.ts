import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libroedit',
  templateUrl: './libroedit.component.html',
  styleUrls: ['./libroedit.component.scss']
})
export class LibroeditComponent implements OnInit {

  public rows: string[];
  public libro: Object;
  public n: number;
  public is_success: boolean = false;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getLibro();
  }
  
  public getLibro() {
    this.n = +this.activatedRoute.snapshot.paramMap.get('n');
    this.apiService.getLibroDetail(this.n).subscribe(data => {
      this.libro = data["data"];
      this.rows = Object.keys(this.libro);
      this.rows.sort();
    });
  }

  onsubmit(editForm: Object, n: number) {
    console.log(editForm);
    this.apiService.editLibro(n, editForm).subscribe(res => {
      console.log(res['data']);
      if (res['data']['affectedRows'] == 1) {
        this.is_success = true;
      }
    });
  }
}

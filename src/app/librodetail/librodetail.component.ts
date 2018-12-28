import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-librodetail',
  templateUrl: './librodetail.component.html',
  styleUrls: ['./librodetail.component.scss'],
})
export class LibrodetailComponent implements OnInit {
  public libro: Object;
  public rows: string[];
  @Input() public n: number;

  constructor(private apiService: ApiService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.rows = [];
    this.getLibro();
  }
  
  getLibro(): void {
    this.apiService.getLibroDetail(this.n).subscribe(data => {
      this.libro = data["data"];
      this.rows = Object.keys(this.libro);
      this.rows.sort();
    });
  }
}

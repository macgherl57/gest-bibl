import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Libro } from "../libro";
import { PagerService } from '../pager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LibrodetailComponent } from '../librodetail/librodetail.component';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.scss']
})
export class RicercaComponent implements OnInit {
  public title: string = 'Liceo Berchet - Biblioteca';
  public libri: Libro[];
  public submitted: boolean = false;
  pager: any = {};
  pagedItems: Libro[];
  public error: boolean = false;
  public is_signedin: Boolean;
  private currentPage: number;
  
  constructor(private apiService: ApiService, private pagerService: PagerService, private modalService: NgbModal,
              private router: Router, private confirmationDialogService: ConfirmationDialogService ) { 
      this.apiService.isUserLoggedIn.subscribe(value => { this.is_signedin = value});

              }

  ngOnInit() { }
  
  public cerca(ricercaForm: any) {
    this.apiService.getLibri(ricercaForm.stringa).subscribe(data => {
      this.libri = data;
      if (this.libri.length > 0) {
        this.submitted = true;
        this.setPage(1);
        console.log(this.libri[0].N);
      } else {
        this.error = true;
        this.submitted = false;
      }
    });
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.libri.length, page, 8);
    this.pagedItems = this.libri.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  
  openModal(n: number) {
    const modalRef = this.modalService.open(LibrodetailComponent);
    modalRef.componentInstance.n = n;
  }
  openEdit(n: number) {
    this.router.navigate(['edit', n]);
  }

  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Per favore conferma:', 'Vuoi davvero eliminare definitivamente questo libro?')
    .then((confirmed) => {
      if (confirmed) {
        this.deleteLibro();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  deleteLibro() {
    console.log("user confirmed the delete action");
  }
}

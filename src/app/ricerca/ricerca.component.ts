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
  del_error: boolean = false;
  del_success: boolean = false;
  public cercaForm = Object;
  
  constructor(private apiService: ApiService, private pagerService: PagerService, private modalService: NgbModal,
              private router: Router, private confirmationDialogService: ConfirmationDialogService ) { 
      this.apiService.isUserLoggedIn.subscribe(value => { this.is_signedin = value});
  }

  ngOnInit() {
    this.stateFn();
  }
  
  public stateFn() {
    let number: number = 0;
    this.apiService.currentPage.subscribe(num => number = num);
    this.apiService.libriSearch.subscribe(value => { 
      this.libri = value;
      if (this.libri.length > 0) {
        this.submitted = true;
        this.setPage(number);
      }
    });
  }

  public cerca(ricercaForm: any) {
    this.cercaForm = ricercaForm;
    this.apiService.getLibri(ricercaForm.stringa).subscribe(data => {
      this.libri = data;
      if (this.libri.length > 0) {
        this.submitted = true;
        this.setPage(1);
        // console.log(this.libri[0].N);
        this.apiService.libriSearch.next(this.libri);
        this.del_success = false;
      } else {
        this.error = true;
        this.submitted = false;
      }
    });
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.libri.length, page, 8);
    this.pagedItems = this.libri.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.apiService.currentPage.next(this.pager.currentPage);
  }
  
  openModal(n: number) {
    const modalRef = this.modalService.open(LibrodetailComponent);
    modalRef.componentInstance.n = n;
  }
  openEdit(n: number) {
    this.router.navigate(['edit', n]);
  }

  public openConfirmationDialog(n: number) {
    this.confirmationDialogService.confirm('Per favore conferma:', 'Vuoi davvero eliminare definitivamente questo libro?')
    .then((confirmed) => {
      if (confirmed) {
        this.deleteLibro(n);
      }
    })
    //.catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  deleteLibro(n: number) {
    //console.log("user confirmed the delete action");
    this.apiService.deleteLibro(n).subscribe(res => {
      if (res['error']) {
        this.del_error = true;
      } else {
        this.del_success = true;
        this.submitted = false;
        for (let a=0; a < this.libri.length; a++) {
          if (this.libri[a].N === n) {
            this.libri.splice(a, 1);
          }
        }
        this.apiService.libriSearch.next(this.libri);
        this.stateFn();
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthsessService } from '../authsess.service';


@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.scss']
})
export class InserimentoComponent implements OnInit {

  inserimForm: FormGroup;
  // public columns: string[];
  private res: Object[];
  private isFormReady: boolean = false;
  errorMsg: boolean = false;
  successAlert: boolean = false;

  constructor(private apiService: ApiService, private fb: FormBuilder, private au: AuthsessService) { }

  ngOnInit() {
    // this.columns = [];
    this.createForm();
  }

  createForm() {
    this.apiService.getColumns().subscribe(data => {
      this.res = data;
      this.res.sort;
      // this.res.filter(campo => campo["Field"] != 'N').forEach(obj => this.columns.push(obj["Field"]));
      const group = this.fb.group({});
      // this.columns.forEach(campo => group.addControl(campo, this.fb.control({disabled: false, value: ''})));
      this.res.forEach(obj => group.addControl(obj["Field"], this.fb.control({disabled: false, value: ''})));
      console.log(group.controls);
      for (const field in group.controls) {
        if (field === 'N') {
          group.removeControl(field);
        }
        if (field.match('autore|titolo|data|collocazione|ISBN|pubblicazione')) {
          let control = group.get(field);
          if (control.validator == Validators.required) { console.log("I reached the control validator of this control!") }
          control.setValidators(Validators.required);
        }
      }
      this.inserimForm = group;
      this.isFormReady = true;
    });
  }
  onsubmit(form: Object) {
    console.log(form);
    this.apiService.insertBook(form).subscribe(data => {
      if (!data["error"]) {
        this.successAlert = true;
      } else {
        this.errorMsg = true;
      }
    });

  }
}

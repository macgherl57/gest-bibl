import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthsessService } from '../authsess.service';


@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.scss']
})
export class InserimentoComponent implements OnInit {

  public inserimForm: FormGroup;
  public res: Object[];
  public errorMsg: boolean = false;
  public successAlert: boolean = false;
  public isFormReady: boolean = false;

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.apiService.getColumns().subscribe(data => {
      this.res = data;
      this.res.shift();
      console.log('Res[0] eccetera: '+this.res[0]["Field"]);
      const group = this.fb.group({});
      this.res.forEach(obj => group.addControl(obj["Field"], this.fb.control({disabled: false, value: ''})));
      console.log(group.controls);
      for (const field in group.controls) {
        if (field.match('autore|titolo|data|collocazione|ISBN|pubblicazione')) {
          let control = group.get(field);
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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthsessService {
   public username: String;
   public studente_id: Number;
   public columns: string[];

  constructor() { }
   
   public destroy(): void {
      this.studente_id = null;
      this.username = null;
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pc } from './pc-list/Pc';

const URL = 'https://668f0d5dbf9912d4c93075a4.mockapi.io/Pcs';

@Injectable({
  providedIn: 'root'
})
export class PcDataService {

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Pc[]>{
    return this.http.get<Pc[]>(URL)
      .pipe(
        tap((Pcs : Pc[]) => Pcs.forEach(Pc => Pc.quantity = 0))
      );
  }
}

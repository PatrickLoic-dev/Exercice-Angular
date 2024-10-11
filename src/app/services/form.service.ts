import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../models/Form';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  url : string = "https://67090c04af1a3998baa02c83.mockapi.io/api/v1"

  constructor(private http : HttpClient) { }

  async save(data: Form) {
    return lastValueFrom(this.http.post<any>(`${this.url}/Form`, data));
  }

  async get() {
    return lastValueFrom(this.http.get<any>(`${this.url}/Form`).pipe(map((data : any) => data)));
  }
}

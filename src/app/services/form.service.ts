import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../models/Form';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http : HttpClient) { }

  async save(data: Form) {
    return lastValueFrom(this.http.post<any>('', data));
  }
}

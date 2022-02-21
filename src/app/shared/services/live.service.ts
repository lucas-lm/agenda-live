import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../models/ResponsePageable.model';

interface apiUrl {
  previous: string,
  next: string
}

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl: apiUrl = {
    'previous': './assets/lives/previousLives.json',
    'next': './assets/lives/nextLives.json'
  };

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivesWithFlag(flag: "previous" | "next"): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl[flag])
  }
}

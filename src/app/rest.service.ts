import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) {}

  getMovieData(){
    let headers = new HttpHeaders({
      "Content-Type": 'application/json;charset=utf-8',
      Accept: 'application/json;charset=utf-8'});
    let params = new HttpParams();

    return this.httpClient.get("http://161.35.79.32:8081/getFilmCatalog",{
      headers: headers,
      observe: 'body',
      params: params,
      responseType: 'json'
    });
  }
}

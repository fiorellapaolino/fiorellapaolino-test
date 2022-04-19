import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  }
/* 
  createUser(): Observable<Users[]>{
/*     return this.httpClient.post<Users[]>(this.baseUrl, user);
 
    return this.httpClient.get<Users[]>(this.baseUrl)
} */


createUser(): Observable<Users[]>{
  return this.httpClient.get<Users[]>('https://jsonplaceholder.typicode.com/todos');
}
/*   createUser(user: Users) {
    return this.httpClient.post<Users[]>(this.baseUrl + 'newclient', user);
  } */

}

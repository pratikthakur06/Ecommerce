
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  URL="http://localhost:8002/getAllUsers";
  getUsers():Observable<any>
  {
    return this.http.get <User[]>(this.URL);
  }

searchName(s: string) {
  if (s) {
    return this.http
      .get(`http://localhost:8002/getAllUsers?email_like=${s.trim()}`)
      .pipe(tap((_) => console.log(`Searching for: ${s}`)));
  } else {
    return this.http.get(`http://localhost:8002/getAllUsers`);
  }
}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<any> {
   return this.http.post<any>('http://localhost:8080/api/v1/login',{username , password}).pipe(
    map(resp=> {      
      return resp;
    })
    )
  }

  
}

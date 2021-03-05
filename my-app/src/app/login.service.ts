import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class LoginResult {   
  userId: string = "";
  result: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private domain = 'https://localhost:44384';

  constructor(private http: HttpClient) { }

  getLoginResult(userId: string, password: string): Observable<LoginResult[]>{
    var apiUrl = this.domain.concat("/api/LoginResults/", userId, "/", password);
    console.log(apiUrl);    
    return this.http.get<LoginResult[]>(apiUrl).pipe(
      catchError(this.handleError<LoginResult[]>("Check Login", []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class EcAccessRight {   
  componentId: string = "";
  state: string = "";
  isVisible: number = 0;
  isEnable: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class EcAccessRightService {
  private domain = 'https://localhost:44384';

  constructor(private http: HttpClient) { }

  getAccessRight(functionId: string, mode: string): Observable<EcAccessRight[]>{
    var userId = sessionStorage.getItem("userId");
    if(userId=="" || userId==undefined){
      userId = "*";
    }

    var apiUrl = this.domain.concat("/api/AccessRights/", functionId, "/", mode, "/", userId);
    console.log(apiUrl);
    return this.http.get<EcAccessRight[]>(apiUrl).pipe(
      catchError(this.handleError<EcAccessRight[]>("Init AccessRight", []))
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



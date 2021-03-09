import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class EcSelectOption{
  name: string = "";
  value: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class EcSelectOptionService {
  private domain = 'https://localhost:44384';

  constructor(private http: HttpClient) { }

  getSelectOptions(userId: string, optionType: string):Observable<EcSelectOption[]>{
    var apiUrl = this.domain.concat("/api/SelectOptions/", optionType, "/", userId);
    console.log(apiUrl);    
    return this.http.get<EcSelectOption[]>(apiUrl).pipe(
      catchError(this.handleError<EcSelectOption[]>("Get Select Option", []))
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

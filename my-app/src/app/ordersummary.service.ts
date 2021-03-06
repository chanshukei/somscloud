import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class OrderSummary{
}

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {
  private domain = 'https://localhost:44384';

  constructor(private http: HttpClient) { }

  getOrderSummaries(status: string):Observable<OrderSummary>{
    var apiUrl = this.domain.concat("/api/OrderSummaries/", status);
    console.log(apiUrl);    
    return this.http.get<OrderSummary[]>(apiUrl).pipe(
      catchError(this.handleError<OrderSummary[]>("Get order summary", []))
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

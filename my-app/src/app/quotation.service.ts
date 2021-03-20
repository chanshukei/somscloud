import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class Quotation {
  quotationId: string = "";
  validity: number = 0;
  expiryDate: Date = new Date(0);
  description: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  private domain = 'https://localhost:44384';

  constructor(private http: HttpClient) {}

  getQuotations(customerNo: string): Observable<Quotation[]>{
    var apiUrl = this.domain.concat("/api/Quotations/", customerNo);
    console.log(apiUrl);
    return this.http.get<Quotation[]>(apiUrl).pipe(
      catchError(this.handleError<Quotation[]>("Get Quotation", []))
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

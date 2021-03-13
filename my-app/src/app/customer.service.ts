import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class Customer {   
  customerNo: string = "";
  englishName: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private domain = 'https://localhost:44384';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]>{
    var userId: string = sessionStorage.getItem("userId") ?? "";
    var apiUrl = this.domain.concat("/api/Customers/", userId);
    console.log(apiUrl);    
    return this.http.get<Customer[]>(apiUrl).pipe(
      catchError(this.handleError<Customer[]>("Get Customer", []))
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

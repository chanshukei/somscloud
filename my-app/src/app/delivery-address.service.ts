import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class DeliveryAddress {
  addressId: string = "";
  address: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryAddressService {

  private domain = 'https://localhost:44384';

  constructor(private http: HttpClient) {}

  getDeliveryAddresses(customerNo: string): Observable<DeliveryAddress[]>{
    var apiUrl = this.domain.concat("/api/DeliveryAddresses/", customerNo);
    console.log(apiUrl);
    return this.http.get<DeliveryAddress[]>(apiUrl).pipe(
      catchError(this.handleError<DeliveryAddress[]>("Get DeliveryAddress", []))
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

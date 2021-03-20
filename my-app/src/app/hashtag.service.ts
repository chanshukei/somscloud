import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class Hashtag{
  text: string ="";
}

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  private domain = 'https://localhost:44384';

  constructor(private http: HttpClient) {}

  getHashtags(): Observable<Hashtag[]>{
    var apiUrl = this.domain.concat("/api/Hashtags");
    console.log(apiUrl);
    return this.http.get<Hashtag[]>(apiUrl).pipe(
      catchError(this.handleError<Hashtag[]>("Get Hashtag", []))
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

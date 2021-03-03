import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export class AccessRight {   
  componentId: string = "";
  state: string = "";
  isVisible: number = 0;
  isEnable: number = 0;
}

@Component({
  selector: 'ec-accessright',
  templateUrl: './ec-accessright.component.html',
  styleUrls: ['./ec-accessright.component.sass']
})
export class EcAccessrightComponent implements OnInit {

  @Input()
  functionId: string = "";

  @Input()
  mode: string = "";

  accessRights$: Observable<AccessRight[]> = new Observable<AccessRight[]>();
  
  private domain = 'https://localhost:44384';

  constructor(private http: HttpClient) {    
  }

  ngOnInit(): void {
    var apiUrl = this.domain.concat("/api/AccessRights/", this.functionId, "/", this.mode, "/*");
    console.log(apiUrl);
    this.accessRights$ = this.http.get<AccessRight[]>(apiUrl);    
    this.http.get<AccessRight>(apiUrl).pipe(
      catchError(this.handleError<AccessRight[]>("Init AccessRight", []))
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

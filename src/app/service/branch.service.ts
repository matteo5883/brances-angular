import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Branch } from '../model/branch';

@Injectable()
export class BranchService {

  constructor( public http: HttpClient,) { }

  getBranches(): Observable<Branch[]>  {
     const allBranch_urls: string = `http://localhost:8090/branch/all`;

     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'Basic ' + btoa('admin:password')
       })
     };
     console.log(httpOptions);

    return this.http.get<Branch[]>(allBranch_urls, httpOptions);

  }

  getFilteredBranches(filter: string): Observable<Branch[]>  {
       const allBranch_urls: string = `http://localhost:8090/branch/all/filter?text=` + filter;

       const httpOptions = {
         headers: new HttpHeaders({
           'Content-Type':  'application/json',
           'Authorization': 'Basic ' + btoa('admin:password')
         })
       };
       console.log(httpOptions);

      return this.http.get<Branch[]>(allBranch_urls, httpOptions);

    }

}

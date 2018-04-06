import { AppError } from './../errors/AppError';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {_throw} from 'rxjs/observable/throw';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.handleError);
  }

  create(resource): Observable<Response> {
    return this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource: {id, title}): Observable<Response> {
    return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify(resource));
  }

  private handleError(error: Response) {
    // we can check for error.status and probably throw diffrent errors
    return _throw(new AppError(error));
  }

}

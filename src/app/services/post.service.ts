import { DataService } from './data.service';
import { AppError } from './../errors/AppError';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {_throw} from 'rxjs/observable/throw';

@Injectable()
export class PostService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}

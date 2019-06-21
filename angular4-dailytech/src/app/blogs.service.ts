import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IBlogs } from './blogs';

@Injectable()
export class BlogService {
    private _blogurl='./app/blogs.json'; // absolute path
    constructor(private _http: Http){}

    getblogs(): Observable<IBlogs[]> { 
        return this._http.get(this._blogurl)
        .map((response: Response) => <IBlogs[]> response.json())
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError); 
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
}
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user';
import {JsonResponse} from './JsonResponse';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	url="http://localhost:49332/Users/";

	list(): Observable<JsonResponse> {
		//all of the service calls will look like the below with either get or post
		return this.http.get(this.url+"List") as Observable<JsonResponse>;
	}

	get(id: number) : Observable<JsonResponse> {
		return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
	}

	constructor(private http: HttpClient) { }
}
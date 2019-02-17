import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  addUser (user: User): Observable<User> {
    const url = `http://localhost:3000/api/customerManagement/customer`;
    return this.http.post<User>(`http://localhost:3000/api/customerManagement/customer`, user);
  }
  loginUser(userData): Observable<User>{
    return this.http.post<User>(`http://localhost:3000/api/customerManagement/login`, userData);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<Array<User>>(`http://localhost:3000/api/customerManagement/customers`);
  }

  deleteUser (user: User): Observable<User> {
    const id =  user._id;
    const url = `http://localhost:3000/api/customerManagement/customer/${id}`;
    return this.http.delete<User>(url);
  }
}

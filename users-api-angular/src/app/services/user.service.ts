import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<any[]>(`${this.userUrl}`);
  }
}

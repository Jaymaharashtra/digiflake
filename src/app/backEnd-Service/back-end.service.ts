import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  
}
export const BACKEND_SERVICE = new InjectionToken<BackEndService>('BACKEND_SERVICE');

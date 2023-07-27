import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private token = 'jwt_token';

  getToken(): string | null{
    return localStorage.getItem(this.token);
  }

  setToken(value: string): void {
    localStorage.setItem(this.token, value)
  }

  removeToken(): void {
    localStorage.removeItem(this.token);
  }
}

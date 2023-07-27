import {Injectable} from "@angular/core";
import {LoginModel} from "../models/login.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, take, tap} from "rxjs";
import {JwtService} from "./jwt.service";
import {RegisterModel} from "../models/register.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean;
  private authUrl = `${environment.apiUrl}/auth'`

  constructor(
    private http: HttpClient,
    private JwtService: JwtService,
  ) {
    this.isAuth = !!this.JwtService.getToken()
  }

  logout(): Observable<null> {
    const url = `${this.authUrl}/signout`;
    return this.http.post<null>(url, {}).pipe(tap(() => {
      this.isAuth = false;
      this.JwtService.removeToken();
    }))
  }

  login(data: LoginModel): Observable<LoginModel> {
    const url = `${this.authUrl}/signin`;
    return this.http.post<LoginModel>(url, data).pipe(
      tap((model) => {
        this.isAuth = true;
        this.JwtService.setToken(data.email);
      })
    );
  }

  register(data: RegisterModel): Observable<RegisterModel> {
    const url = `${this.authUrl}/signup`;
    return this.http.post<RegisterModel>(url, data);
  }
}

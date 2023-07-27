import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtService} from "../services/jwt.service";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = req;
    const tokenValue = this.jwtService.getToken();
    if (tokenValue) {
      authReq = req.clone({
        headers: req.headers.set('x-token',  `${tokenValue}`),
      });
    }
    return next.handle(authReq);
  }
}

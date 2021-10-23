import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpInterceptor, HttpEvent} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor', req.url);
    req = req.clone({
      setHeaders: {
        Authorization: `Blablabla 128736129`
      }
    })
    return next.handle(req).pipe(
      tap(res => console.log(res))
    )
  }
}

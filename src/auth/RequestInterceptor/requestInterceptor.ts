import {HttpRequest, HttpEvent, HttpHandlerFn} from '@angular/common/http';
import { Observable } from 'rxjs';

export function requestInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
  const cloned = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${localStorage.getItem('authToken')}`)
  });
  return next(cloned);
}

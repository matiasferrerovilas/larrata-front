import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EnvService } from '../enviromentService/env.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private envService: EnvService,
    private httpClient: HttpClient) { }


  static buildUrl(url: string, afterBar?: string) {
    return afterBar ? url + '/' + afterBar : url;
  }
  getBaseUrl(url: string) {
    return this.envService.baseUrl + '/' + url + '/';
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.getBaseUrl(url));
  }

  public post<T>(url: string, model: any): Observable<T> {
    return this.httpClient.post<T>(this.getBaseUrl(url), model);
  }
  public postPromise<T>(url: string, model: any): Promise<T> {
    return this.httpClient.post<T>(this.getBaseUrl(url), model).pipe(map(v => v as T))
      .toPromise();
  }
  public getPromise<T>(url: string): Promise<T> {
    return this.httpClient.get<T>(this.getBaseUrl(url)).pipe(map(v => v as T))
      .toPromise();
  }
  getBaseApiFrontUrl(): string {
    return this.envService.baseUrl + '/';
  }
  getObservable<T>(url: string): Observable<T> {
    return from(this.httpClient.get<T>(this.getBaseUrl(url)).pipe(map(v => v as T))
      .toPromise())
  }
}

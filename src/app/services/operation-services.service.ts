import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class OperationServicesService {

  constructor(private http: HttpClient) { }

  getResult(operation, operationOne, operationTwo) {
    var url = environment.endpointOperation + operation + '/' + operationOne + '/' + operationTwo;
    const sub = this.http.get(url);
    sub.subscribe(
      data => {
        console.log('getResult ok =>', data);
      },
      err => {
        // if (!environment.production) {
        console.warn(err.message, err.statusText + ' - [getResult]');
        // }
        alert('Estamos presentando incovenientes en la comunicación');
      });

    return sub;
  }

}

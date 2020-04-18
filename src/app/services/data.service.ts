import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../models/product.model';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
    providedIn: "root"
})
export class DataService {
    handleHttpError: HandleError;

    constructor (
        private http: HttpClient,
        private httpErrorHandler: HttpErrorHandler
    ) {
        this.handleHttpError = this.httpErrorHandler.createHandleError('DataService');
    }

    getData (): Observable<Array<ProductType>> {
        return this.http.get<Array<ProductType>>('https://my-json-server.typicode.com/kapilbhagat2906/PhotosMockData/photos')
            .pipe(
                catchError(this.handleHttpError<Array<ProductType>>('getData'))
            );
    }
}

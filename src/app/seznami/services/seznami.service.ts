import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {NakupovalniSeznam} from '../models/seznam';
import {Artikel} from '../models/artikel';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class SeznamiService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/nakupovalniseznami';
    private productsUrl = 'http://localhost:8080/v1/artikli/';

    constructor(private http: HttpClient) {
    }

    getSeznami(): Observable<NakupovalniSeznam[]> {
        return this.http.get<NakupovalniSeznam[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    getSeznam(id: number): Observable<NakupovalniSeznam> {
        const url = `${this.url}/${id}`;
        return this.http.get<NakupovalniSeznam>(url)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    create(seznamId: number, artikel: Artikel): Observable<Artikel> {
        var artikelDto = {
            seznamId : seznamId,
            imeArtikla : artikel.imeArtikla
          };
        return this.http.post<Artikel>(this.productsUrl, JSON.stringify(artikelDto), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StarShipsResponse } from '../interfaces/starships.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarShips(page: number): Observable<StarShipsResponse>{
    return this.http.get<StarShipsResponse>(`${environment.apiBaseUrl}/starships?page=${page}`)
  }
}

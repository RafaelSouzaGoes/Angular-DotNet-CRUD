import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/dados-superHero';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private url: string = 'SuperHero';

  constructor(private http: HttpClient) {}

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiURL}/${this.url}`);
  }

  public updateHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiURL}/${this.url}`,
      hero
    );
  }

  public createHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiURL}/${this.url}`,
      hero
    );
  }

  public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiURL}/${this.url}/${hero.id}`
    );
  }
}

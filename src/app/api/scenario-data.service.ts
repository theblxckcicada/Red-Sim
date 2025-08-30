import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ScenarioData } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ScenarioDataService {
  private url = `${environment.apiUrl}/scenario`;

  http = inject(HttpClient);
  getScenarioData(): Observable<ScenarioData> {
    return this.http
      .get<ScenarioData>(this.url);
  }
}

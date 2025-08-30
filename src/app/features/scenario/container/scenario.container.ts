import { Component, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ScenarioDataService } from 'src/app/api';
import { ScenarioData } from 'src/app/model';

@Component({
  standalone: false,
  selector: 'app-scenario-container',
  template: `
  <ng-container *ngIf="scenarioData$ | async as scenarioData; else noScenarioData">
  <app-scenario [scenarioData]="scenarioData"></app-scenario>
</ng-container>

<ng-template #noScenarioData>
  <p>No scenario data available.</p>
</ng-template>
 `,
  styles: [``],
})
export class ScenarioContainer {
  scenarioData?: ScenarioData;
  errorMessage: string | null = null;
  scenarioService = inject(ScenarioDataService);
  scenarioData$: Observable<ScenarioData | null> = this.scenarioService
    .getScenarioData()
    .pipe(
      catchError((err) => {
        return of(); // Return empty array to prevent breaking the UI
      })
    );
}

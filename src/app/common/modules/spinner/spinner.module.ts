import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppSpinnerComponent } from '.';

const Containers = [AppSpinnerComponent];

@NgModule({
  declarations: [Containers],
  imports: [CommonModule, MatSnackBarModule],
  exports: [Containers],
})
export class SpinnerModule {}

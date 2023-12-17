import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerPipe } from './power.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [PowerPipe],
  exports: [PowerPipe],
})
export class PowerPipeModule {}

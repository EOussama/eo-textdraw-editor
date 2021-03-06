import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoxElementModule } from '../elements/box-element/box-element.module';
import { TextElementModule } from '../elements/text-element/text-element.module';


@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    BoxElementModule,
    TextElementModule
  ],
  exports: [BoardComponent]
})
export class BoardModule { }

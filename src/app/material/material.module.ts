import { NgModule } from '@angular/core';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


const MODULES = [
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatTableModule,
  MatIconModule,
  MatTooltipModule,
  MatListModule,
  MatInputModule,
  MatToolbarModule,
];


@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { TestComponent } from './test/test.component';
import { TooltipFormComponent } from './tooltip-form/tooltip-form.component';
import { FinalComponent } from './final/final.component';
import { MultiSelectComponent } from 'ng-multiselect-dropdown';
import { MultiselectComponent } from "./multiselect/multiselect.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FinalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // isOffcanvasOpen = false;

  // adjustLayout(isOpen: boolean) {
  //   this.isOffcanvasOpen = isOpen;
  // }
}
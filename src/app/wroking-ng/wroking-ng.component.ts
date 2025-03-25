import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectComponent as NgSelectRef, NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-wroking-ng',
  standalone: true, 
  imports: [FormsModule, CommonModule, NgSelectModule],
  templateUrl: './wroking-ng.component.html',
  styleUrl: './wroking-ng.component.css'
})
export class WrokingNgComponent {
  selectedCar: any = null;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
}

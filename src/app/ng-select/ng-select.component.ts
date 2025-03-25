import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgSelectComponent as NgSelectRef,
  NgSelectModule,
} from '@ng-select/ng-select';

@Component({
  selector: 'app-ng-select',
  standalone: true,
  imports: [NgSelectModule, FormsModule],
  templateUrl: './ng-select.component.html',
  styleUrl: './ng-select.component.css',
})
export class NgSelectComponent {
  placeholderText: string = 'Select an option';
  @ViewChild(NgSelectRef) ngSelectInstance!: NgSelectRef;

  accounts = [
    { name: 'Account 1', country: 'USA' },
    { name: 'Account 2', country: 'India' },
    { name: 'Account 3', country: 'USA' },
    { name: 'Account 4', country: 'India' },
  ];

  selectedAccount: string | null = null;

  changePlaceholder(newPlaceholder: string) {
    this.placeholderText = newPlaceholder;
  }

  onValueChange(value: any) {
    if (!value) {
      this.changePlaceholder('Select an option');
    } else {
      this.changePlaceholder('');
    }
  }

  dropdownOpen: boolean = false;

  toggleDropdown() {
    if (this.ngSelectInstance) {
      this.ngSelectInstance.open();
    }
  }
}

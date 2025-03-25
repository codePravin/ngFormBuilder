import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms'; 

// interfaces
// standalone
// onInIt
// ngModel


interface DropdownItem {
  item_id: number;
  item_text: string;
}

@Component({
  selector: 'app-multiselect',
  standalone: true,
  imports: [NgMultiSelectDropDownModule, CommonModule, FormsModule],
  templateUrl: './multiselect.component.html',
  styleUrl: './multiselect.component.css'
})

export class MultiselectComponent implements OnInit {
  dropdownList: DropdownItem[]  = [];
  selectedItems: DropdownItem[]  = [];
  dropdownSettings: IDropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 5, item_text: 'Hyderabad' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}

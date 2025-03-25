import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { NgSelectComponent as NgSelectRef, NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
declare var $: any;

interface DropdownItem {
  item_id: number;
  item_text: string;
}
@Component({
  selector: 'app-final',
  standalone:true,
  imports: [NgMultiSelectDropDownModule, FormsModule, CommonModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './final.component.html',
  styleUrl: './final.component.css'
})
export class FinalComponent implements OnInit, AfterViewInit {
  selectedCar: any = null;
  selectedCar1: any = null;
  selectedCar2: any = null;
  dropdownList: DropdownItem[] = [];
  selectedItems: DropdownItem[] = [];
  dropdownSettings: IDropdownSettings = {};

  dropdownList1: DropdownItem[] = [];
  selectedItems1: DropdownItem[] = [];
  dropdownSettings1: IDropdownSettings = {};

  dropdownList2: DropdownItem[] = [];
  selectedItems2: DropdownItem[] = [];
  dropdownSettings2: IDropdownSettings = {};

  model = {
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agree: false,
  };

  @ViewChild('datePicker', { static: false }) datePicker!: ElementRef;
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      textInput: ['', Validators.required],
      emailInput: ['', [Validators.required, Validators.email]],
      passwordInput: ['', Validators.required],
      numberInput: [null, Validators.required],
      urlInput: ['', Validators.required],
      telInput: ['', Validators.required],
      searchInput: [''],
      dateInput: [''],
      timeInput: [''],
      datetimeInput: [''],
      monthInput: [''],
      weekInput: [''],
      textareaInput: [''],
      fileInput: [null],
      selectInput: ['', Validators.required],
      multiSelect: [[], Validators.required],
      hiddenInput: ['hiddenValue'],
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {

      $('input[name="datetimes"]').daterangepicker({
        timePicker: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale: {
          format: 'M/DD hh:mm A'
        }
      });
      $('#datetimepicker1').datetimepicker();
      $('#datetimepicker2').datetimepicker();
      $('#datetimepicker3').datetimepicker();
    }, 500);
  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangalore' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 5, item_text: 'Hyderabad' },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
    };

    this.dropdownList1 = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangalore' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 5, item_text: 'Hyderabad' },
    ];
    this.selectedItems1 = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
    ];
    this.dropdownSettings1 = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
    };

    this.dropdownList2 = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangalore' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 5, item_text: 'Hyderabad' },
    ];
    this.selectedItems2 = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
    ];
    this.dropdownSettings2 = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
    };
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }




  onFormSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', this.model);
    } else {
      console.log('Form Invalid');
    }
  }

}

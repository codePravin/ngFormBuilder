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
  standalone: true,
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

  form!: FormGroup;
  form1!: FormGroup;
  form2!: FormGroup;

  constructor(private fb: FormBuilder) { }

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

  ngOnInit(): void {
    this.form = this.fb.group({
      user: ['', Validators.required],
      file: [null, Validators.required],
      number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dateRange: ['', Validators.required],
      dateTime: ['', Validators.required],
      textarea: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      tel: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      search: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      dateTimeLocal: ['', Validators.required],
      month: ['', Validators.required],
      week: ['', Validators.required],
      select: [null, Validators.required],
      multi: [[], Validators.required],
      singleSelect: [null, Validators.required],
      multiSelect: [[], Validators.required],
      checkboxGroup: this.fb.group({
        checkbox1: [false],
        checkbox2: [false]
      }),
      radioOption1: [null, Validators.required]
    });

    this.form1 = this.fb.group({
      user: ['', Validators.required],
      file: [null, Validators.required],
      number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dateRange: ['', Validators.required],
      dateTime: ['', Validators.required],
      textarea: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      tel: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      search: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      dateTimeLocal: ['', Validators.required],
      month: ['', Validators.required],
      week: ['', Validators.required],
      select: [null, Validators.required],
      multi: [[], Validators.required],
      singleSelect: [null, Validators.required],
      multiSelect: [[], Validators.required],
      checkboxGroup: this.fb.group({
        checkbox3: [false],
        checkbox4: [false]
      }),
      radioOption2: [null, Validators.required]
    });

    this.form2 = this.fb.group({
      user: ['', Validators.required],
      file: [null, Validators.required],
      number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dateRange: ['', Validators.required],
      dateTime: ['', Validators.required],
      textarea: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      tel: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      search: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      dateTimeLocal: ['', Validators.required],
      month: ['', Validators.required],
      week: ['', Validators.required],
      select: [null, Validators.required],
      multi: [[], Validators.required],
      singleSelect: [null, Validators.required],
      multiSelect: [[], Validators.required],
      checkboxGroup: this.fb.group({
        checkbox5: [false],
        checkbox6: [false]
      }),
      radioOption3: [null, Validators.required]
    });


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

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.form.patchValue({ file: input.files[0] });
    }
  }


  get checkboxGroupInvalid(): boolean {
    const group = this.form.get('checkboxGroup') as FormGroup;
    const anyChecked = Object.values(group.controls).some(control => control.value);
    return !anyChecked && group.touched;
  }

  get checkboxGroupInvalid1(): boolean {
    const group = this.form1.get('checkboxGroup') as FormGroup;
    const anyChecked = Object.values(group.controls).some(control => control.value);
    return !anyChecked && group.touched;
  }

  get checkboxGroupInvalid2(): boolean {
    const group = this.form2.get('checkboxGroup') as FormGroup;
    const anyChecked = Object.values(group.controls).some(control => control.value);
    return !anyChecked && group.touched;
  }

  onSubmit(): void {
    if (!this.isCheckboxValid()) {
      this.form.get('checkboxGroup')?.markAllAsTouched();
    }
    if (this.form.valid && this.isCheckboxValid()) {
      console.log('Form submitted!', this.form.value);
    } else {
      this.form.markAllAsTouched(); // This shows all validation errors
    }
  }

  private isCheckboxValid(): boolean {
    const group = this.form.get('checkboxGroup') as FormGroup;
    return Object.values(group.controls).some(control => control.value);
  }


  onSubmit1(): void {
    if (!this.isCheckboxValid1()) {
      this.form1.get('checkboxGroup')?.markAllAsTouched();
    }
    if (this.form1.valid && this.isCheckboxValid1()) {
      console.log('Form submitted!', this.form1.value);
    } else {
      this.form1.markAllAsTouched(); // This shows all validation errors
    }
  }

  private isCheckboxValid1(): boolean {
    const group = this.form1.get('checkboxGroup') as FormGroup;
    return Object.values(group.controls).some(control => control.value);
  }


  onSubmit2(): void {
    if (!this.isCheckboxValid2()) {
      this.form2.get('checkboxGroup')?.markAllAsTouched();
    }
    if (this.form2.valid && this.isCheckboxValid2()) {
      console.log('Form submitted!', this.form2.value);
    } else {
      this.form2.markAllAsTouched(); // This shows all validation errors
    }
  }

  private isCheckboxValid2(): boolean {
    const group = this.form2.get('checkboxGroup') as FormGroup;
    return Object.values(group.controls).some(control => control.value);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }




}

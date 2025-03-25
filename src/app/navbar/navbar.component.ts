import { Component, EventEmitter, Output } from '@angular/core';
import { SideNavBarComponent } from "../side-nav-bar/side-nav-bar.component";
import { MultiselectComponent } from '../multiselect/multiselect.component';
import { NgSelectComponent } from '../ng-select/ng-select.component';
import { WrokingNgComponent } from '../wroking-ng/wroking-ng.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [SideNavBarComponent  ,WrokingNgComponent]
  // imports: [SideNavBarComponent, MultiselectComponent, NgSelectComponent, WrokingNgComponent]

})
export class NavComponent {
  @Output() layoutShift = new EventEmitter<boolean>();
  isOffcanvasOpen = false;

  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
    document.body.classList.toggle('offcanvas-open', this.isOffcanvasOpen);
    this.layoutShift.emit(this.isOffcanvasOpen);
  }
}
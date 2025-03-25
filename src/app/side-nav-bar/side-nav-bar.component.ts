import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav-bar',
  imports: [CommonModule],
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.css'
})
export class SideNavBarComponent {
  public arr =["Technical Moc", "Personnel MOC", "Operating & Maintenance MOC", "Masters", "Report", "Logs"]
}

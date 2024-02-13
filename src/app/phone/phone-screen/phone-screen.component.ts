import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'phone-screen',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './phone-screen.component.html',
  styleUrl: './phone-screen.component.scss'
})
export class PhoneScreenComponent {

  navigateSwitchApps() {
    throw new Error('Method not implemented.');
  }
    
  navigateHome() {
    throw new Error('Method not implemented.');
  }
    
  navigateGoBack() {
    throw new Error('Method not implemented.');
  }
}

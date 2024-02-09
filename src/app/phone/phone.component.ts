import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'phone-element',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {

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

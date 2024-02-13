import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PhoneScreenComponent } from "./phone-screen/phone-screen.component";

@Component({
    selector: 'phone-element',
    standalone: true,
    templateUrl: './phone.component.html',
    styleUrl: './phone.component.scss',
    imports: [MatIconModule, MatButtonModule, PhoneScreenComponent]
})
export class PhoneComponent {



}

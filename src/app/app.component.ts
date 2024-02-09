import { Component } from '@angular/core';
import { MessagingAppComponent } from "./messaging-app/messaging-app.component";
import { PhoneComponent } from "./phone/phone.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [MessagingAppComponent, PhoneComponent]
})
export class AppComponent {
  title = 'modern-dnd-app';
}

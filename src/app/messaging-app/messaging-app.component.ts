import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'messaging-app',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './messaging-app.component.html',
  styleUrl: './messaging-app.component.scss'
})
export class MessagingAppComponent {
  channelSelected = false;

  channelList = [
    {
      channelId: 'channelId1',
      channelName: 'Channel 1',
      channelAvatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    },
    {
      channelId: 'channelId2',
      channelName: 'Channel 2',
      channelAvatar: '',
    },
  ];

  messageObject = {
    channelId: 'messageChannelId', // Unique to identify the channel recipient of the message
    type: 'text', // Text or image message
    user: 'User info', // User who sent the message
    time: 'Message sent time', // Actual time the message was sent
    date: 'Message sent date', // In-game date, not real date
    status: 'Message status', // Delivered or undelivered
    content: {
      text: 'Message content',
    } // Content is either text or image
  };

  onChannelSelect(channelId: string) {
    this.channelSelected = true;
  }
}

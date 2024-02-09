import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingAppComponent } from './messaging-app.component';

describe('MessagingAppComponent', () => {
  let component: MessagingAppComponent;
  let fixture: ComponentFixture<MessagingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagingAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

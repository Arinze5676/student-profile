import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: false,
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  profileImageUrl = 'https://th.bing.com/th/id/OIP.JlhM4L11h-9zMxxcpwlAOAHaE7?w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2';

 isback = false;
 picwidth = 300;
 picheight =300;
 picradius = 600;
 biofont = 15;
 
 
  name = '';

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value; 
  }
 
}

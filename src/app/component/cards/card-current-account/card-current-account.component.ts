import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-current-account',
  templateUrl: './card-current-account.component.html',
  styleUrls: ['./card-current-account.component.css']
})
export class CardCurrentAccountComponent {
  @Input() item: any;
}

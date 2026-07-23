import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-deposit-account',
  templateUrl: './card-deposit-account.component.html',
  styleUrls: ['./card-deposit-account.component.css']
})
export class CardDepositAccountComponent {
  @Input() item: any;
}

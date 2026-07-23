import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-certified-deposit-term',
  templateUrl: './card-certified-deposit-term.component.html',
  styleUrls: ['./card-certified-deposit-term.component.css']
})
export class CardCertifiedDepositTermComponent {
  @Input() item: any;
}

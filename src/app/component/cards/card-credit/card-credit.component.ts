import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-credit',
  templateUrl: './card-credit.component.html',
  styleUrls: ['./card-credit.component.css']
})
export class CardCreditComponent {
  @Input() item: any;
}

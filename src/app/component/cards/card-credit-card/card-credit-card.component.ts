import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-credit-card',
  templateUrl: './card-credit-card.component.html',
  styleUrls: ['./card-credit-card.component.css']
})
export class CardCreditCardComponent implements OnInit {

  @Input()
  item: any = [];
  items: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  setItem(item: any) {
    this.items.push(item);
  }

  ngOnChanges() {
    this.setItem(this.item);
  }

  valpayment(val: string) {
    if (val === "") {
      return true;
    } else {
      return false;
    }
  }
}

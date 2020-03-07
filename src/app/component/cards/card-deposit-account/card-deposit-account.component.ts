import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card-deposit-account',
  templateUrl: './card-deposit-account.component.html',
  styleUrls: ['./card-deposit-account.component.css']
})
export class CardDepositAccountComponent implements OnInit, OnChanges {

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

}

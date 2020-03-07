import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-certified-deposit-term',
  templateUrl: './card-certified-deposit-term.component.html',
  styleUrls: ['./card-certified-deposit-term.component.css']
})
export class CardCertifiedDepositTermComponent implements OnInit {

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

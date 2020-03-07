import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-credit',
  templateUrl: './card-credit.component.html',
  styleUrls: ['./card-credit.component.css']
})
export class CardCreditComponent implements OnInit {

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

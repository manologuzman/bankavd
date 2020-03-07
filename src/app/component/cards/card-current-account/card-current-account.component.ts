import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-current-account',
  templateUrl: './card-current-account.component.html',
  styleUrls: ['./card-current-account.component.css']
})
export class CardCurrentAccountComponent implements OnInit {

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

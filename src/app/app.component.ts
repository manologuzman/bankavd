import { Component, Input } from '@angular/core';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank AVD';

  todos: boolean = false;
  banco = "BANCO_1";

  product: any[] = [];

  constructor(
    protected ProductService: ProductService,
  ) {
  }

  ngOnInit() {
    this.ProductService.getJsons()
      .subscribe(
        (data) => { // Success
          this.product = data['product'];
        },
        (error) => {
          console.error(error);
        }
      );
  }

  ngOnChanges(): void {
    console.log(this.todos);
  }

}

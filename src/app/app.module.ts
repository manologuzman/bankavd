import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDepositAccountComponent } from './component/cards/card-deposit-account/card-deposit-account.component';
import { CardCertifiedDepositTermComponent } from './component/cards/card-certified-deposit-term/card-certified-deposit-term.component';
import { CardCreditComponent } from './component/cards/card-credit/card-credit.component';
import { CardCreditCardComponent } from './component/cards/card-credit-card/card-credit-card.component';
import { CardCurrentAccountComponent } from './component/cards/card-current-account/card-current-account.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { NproductsPipe } from './pipes/nproducts.pipe';
import { EnmascararPipe } from './pipes/enmascarar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardDepositAccountComponent,
    CardCertifiedDepositTermComponent,
    CardCreditComponent,
    CardCreditCardComponent,
    CardCurrentAccountComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NproductsPipe,
    EnmascararPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { LigtBoxDirective } from './directives/ligt-box.directive';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { ProductCardsDirective } from './directives/product-cards.directive';
import { EgyNationalIdPipe } from './pipes/egy-national-id.pipe';
import { CreditCardFormatPipe } from './pipes/credit-card-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ProductsComponent,
    LigtBoxDirective,
    ProductCardsComponent,
    ProductCardsDirective,
    EgyNationalIdPipe,
    CreditCardFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { LigtBoxDirective } from './directives/ligt-box.directive';
import { ProductCardsDirective } from './directives/product-cards.directive';
import { EgyNationalIdPipe } from './pipes/egy-national-id.pipe';
import { CreditCardFormatPipe } from './pipes/credit-card-format.pipe';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

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
    ProductCategoriesComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
    ProductDetailsComponent,
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

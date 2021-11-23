import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Products', component: ProductCardsComponent},
  {path: 'Dashboard', component: ProductCategoriesComponent},
  {path:'admin/insertproduct', component: AddProductComponent},
  {path: 'Products/:pID', component: ProductDetailsComponent},
  {
    path:'User',
    loadChildren: ()=> import('src/app/user/user.module')
                        .then(m=> m.UserModule)
  },
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

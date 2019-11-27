import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from "./containers/products/products.component";
import { ProductsService } from "src/app/services/products.service";
import { ProductItemComponent } from "./containers/product-item/product-item.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: ProductsComponent
  },
  {
    path: ":id",
    component: ProductItemComponent
  }
  //   {
  //     path: "new",
  //     component: ProductsItemComponent
  //   }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [ProductsService],

  declarations: [ProductsComponent, ProductItemComponent]
})
export class ProductsModule {}

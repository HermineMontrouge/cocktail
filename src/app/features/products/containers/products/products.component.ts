import { Component } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent {
  products: any;

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.productsService.fetchProducts().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }
}

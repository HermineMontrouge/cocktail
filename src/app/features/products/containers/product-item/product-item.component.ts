import { Component, ComponentFactoryResolver } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent {
  product = {};

  constructor(
    private productsService: ProductsService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log(id);
    this.productsService.fetchProducts().subscribe(products => {
      console.log(typeof products);
      Object.values(products).forEach(element => {
        if (element.id === +id) {
          this.product = element;
          this.storageService.setItem(id, element);
        }
        console.log(element);
      });
    });
  }
}

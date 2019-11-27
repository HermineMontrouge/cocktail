import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get("./assets/json/cocktails.json");
  }
}

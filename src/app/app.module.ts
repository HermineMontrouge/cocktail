import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { ProductsService } from "./services/products.service";
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}

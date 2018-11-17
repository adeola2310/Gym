import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './shared/modules/core.module';
import {SanitizeHtmlPipe} from './shared/pipes/sanitize-html.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HeaderComponent} from './shared/components/header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SanitizeHtmlPipe,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
      FooterComponent,
      HeaderComponent,
      GalleryComponent,
      ProductComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
  ],
  providers: [SanitizeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

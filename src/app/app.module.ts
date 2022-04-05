import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainComponent } from './main/main.component';
<<<<<<< HEAD
import { BodyComponent } from './main/body/body.component';
=======
import { CarouselComponent } from './main/carousel/carousel.component';
>>>>>>> 045df4641f9088f5af40af05c54d9adf38c14c89

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
<<<<<<< HEAD
    BodyComponent
=======
    CarouselComponent
>>>>>>> 045df4641f9088f5af40af05c54d9adf38c14c89
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

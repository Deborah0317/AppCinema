import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './main/body/body.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './main/form/form.component';
import { SchedaComponent } from './scheda/scheda.component';
import { DetailsComponent } from './scheda/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BodyComponent,
    CarouselComponent,
    FormComponent,
    SchedaComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

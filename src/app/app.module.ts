import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgSliderModule } from './img-slider/img-slider.module';
import { ImageGalleryModule } from './image-gallery/image-gallery.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
// @ts-ignore
import { AuthService } from './auth.service';
import { GalleryConfig } from './image-gallery/token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImgSliderModule,
    ImageGalleryModule,
    ContentProjectionModule
  ],
  // providers: [AuthService],
  providers: [
    {provide: AuthService, useClass: AuthService},
    {provide: 'API_ENDPOINT', useValue: 'http://api.example.com'},
    {provide: 'API_URL', useExisting: 'API_ENDPOINT'},
    {
      provide: 'some-token',
      // tslint:disable-next-line:only-arrow-functions
      useFactory() {
        return Math.random();
      }
    },
    // {provide: 'API_URL', useValue: 'abc.com'},
    // {provide: 'API_URL', useExisting: 'api.com'}
    {provide: GalleryConfig, useValue: 2}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

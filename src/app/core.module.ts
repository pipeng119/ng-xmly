import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [HeaderComponent],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppModule引入');
    }
  }
}

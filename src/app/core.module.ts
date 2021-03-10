import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';
import { BreadcrumbModule } from './share/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ShareModule, BreadcrumbModule,],
  exports: [HeaderComponent, ShareModule, BreadcrumbModule,],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppModule引入');
    }
  }
}

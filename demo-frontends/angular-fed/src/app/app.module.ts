import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { CustomelementComponent } from './customelement/customelement.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoAppComponent } from './demo-app/demo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomelementComponent,
    DemoAppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent
  ],
  entryComponents: [
    AppComponent,
    CustomelementComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {

    const { injector } = this;

    // create custom elements from angular components
    const ngCustomElement = createCustomElement(CustomelementComponent, { injector });
    const ngRootElement = createCustomElement(AppComponent, { injector });

    // define in browser registry
    customElements.define('ng-el', ngCustomElement);
    customElements.define('ng-root-el', ngRootElement);

  }
}

﻿import { NgModule, SkipSelf, Optional, } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// import RxJs needed operators only once
import "./rxjs-operators";

import { BrowserStorageService } from "./browser-storage.service";

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    // components that are used in app.component.ts will be listed here.
  ],
  declarations: [
    // components that are used in app.component.ts will be listed here.
  ],
  providers: [
    // global singleton services of the whole app will be listed here.
    BrowserStorageService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("CoreModule should be imported ONLY in AppModule.");
    }
  }
}

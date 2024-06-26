import { WebauthnPageComponent } from '@ghostfolio/client/pages/webauthn/webauthn-page.component';
import { GfLogoComponent } from '@ghostfolio/ui/logo';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { WebauthnPageRoutingModule } from './webauthn-page-routing.module';

@NgModule({
  declarations: [WebauthnPageComponent],
  imports: [
    CommonModule,
    GfLogoComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
    WebauthnPageRoutingModule
  ]
})
export class WebauthnPageModule {}

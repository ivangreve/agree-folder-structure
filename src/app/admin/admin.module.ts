import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AuthModule
  ],
  declarations: [
    // Components to import
  ],
  exports: [
    // Components to export
  ],
  providers: [
    // Services, Pipes, etc.
  ]
})
export class AdminModule { }

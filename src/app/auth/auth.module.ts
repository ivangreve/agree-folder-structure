import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    CoreModule
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
export class AuthModule { }

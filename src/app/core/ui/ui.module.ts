import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonExampleComponent } from './components/button-example/button-example.component';
import { CardExampleComponent } from './components/card-example/card-example.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // Components to import
    ButtonExampleComponent,
    CardExampleComponent
  ],
  exports: [
    // Components to export
  ],
  providers: [
    // Services, Pipes, etc.
  ]
})

export class UiModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';

/* CORE MODULE

- En el folder CORE deberían de existir todos los modulos/models/componentes los cuales se usan ó pueden ser utilizados por otros modulos.
- El Module CORE importará todos los SubModules de la carpeta exponerlos a quien lo requiera.
- Podría crearse un nuevo Module "SharedModule" para exponer por ejemplo para importaciones como => HttpClientModule 

*/

@NgModule({
  imports: [
    CommonModule,
    UiModule
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

export class CoreModule { }

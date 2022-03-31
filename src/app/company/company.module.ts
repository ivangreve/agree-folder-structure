import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

/* COMPANY MODULE

- Módulo existente, que podría ser desmembrado en 2 módulos que sean importados por CompanyModule:
  - Workspace
  - Fintech

- En caso de existir componentes comunes entre ambos pueden ir en Core => UI ó se puede crear otro module:
  [CompanySharedModule] al cual importe fintech y workspace.

*/
@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    // Components to import
  ],
  providers: [
    // Services, Pipes, etc.
  ]
})
export class CompanyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemindingComponent } from './reminding.component';
import { RemindingRoutingModule } from './reminding.router.module';
import { SelectedAvtoModule } from '../shared/selected-avto/selected-avto.module';
import { ItemAvtoModule } from '../shared/item-avto/item-avto.module';
import { ItemRemindComponent } from './item-remind/item-remind.component';
import { OrderPipeModule } from '../_pipes/order.pipe.module';
import { DialogCreateDocComponent } from './dialogs/dialog-create-doc/dialog-create-doc.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatDialogModule, MatDatepickerModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { RemindingService } from './services/reminding.service';

@NgModule({
  declarations: [
    RemindingComponent,
    ItemRemindComponent,
    DialogCreateDocComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RemindingRoutingModule,
    SelectedAvtoModule,
    ItemAvtoModule,
    OrderPipeModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  entryComponents: [
    DialogCreateDocComponent,
  ],
  providers: [
    RemindingService,
  ]
})
export class RemindingModule { }

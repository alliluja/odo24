import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import {
  MatButtonModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatSelectModule,
  MatDividerModule,
  MatListModule,
} from '@angular/material';
import { AutoService } from '../_services/avto.service';
import { SelectedAvtoModule } from '../shared/selected-avto/selected-avto.module';
import { GroupService } from '../_services/groups.service';
import { ItemServiceComponent } from './item-service/item-service.component';
import { ServiceService } from './services/service.service';
import { DialogCreateAvtoComponent } from '../shared/dialog-create-avto/dialog-create-avto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogCreateServiceComponent } from './dialogs/dialog-create-service/dialog-create-service.component';
import { DialogUpdateServiceComponent } from './dialogs/dialog-update-service/dialog-update-service.component';
import { OrderPipeModule } from '../_pipes/order.pipe.module';
import { ListAvtoComponent } from '../shared/list-avto/list-avto.component';
import { SharedUtilsModule } from '../shared_modules/utils/shared-utils.modue';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ServiceExpirationComponent } from './service-expiration/service-expiration.component';
import { LeftDistancePipe } from './pipes/left-distance.pipe';
import { DistanceLevelPipe } from './pipes/distance-level.pipe';
import { DialogUpdateGroupComponent } from './dialogs/dialog-update-group/dialog-update-group.component';
import { DialogCreateGroupComponent } from './dialogs/dialog-create-group/dialog-create-group.component';
import { DialogConfigGroupsComponent } from './dialogs/dialog-config-groups/dialog-config-groups.component';

@NgModule({
  declarations: [
    ServicesComponent,
    ItemServiceComponent,
    DialogCreateAvtoComponent,
    DialogCreateAvtoComponent,
    DialogCreateServiceComponent,
    DialogUpdateServiceComponent,
    DialogUpdateGroupComponent,
    DialogCreateGroupComponent,
    ListAvtoComponent,
    ServiceExpirationComponent,
    LeftDistancePipe,
    DistanceLevelPipe,
    DialogConfigGroupsComponent,
    
  ],
  imports: [
    CommonModule,
    SelectedAvtoModule,
    MatSidenavModule,
    MatSnackBarModule,
    SharedUtilsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    OrderPipeModule,
  ],
  providers: [
    AutoService,
    GroupService,
    ServiceService,
  ],
  entryComponents: [
    DialogCreateAvtoComponent,
    DialogCreateServiceComponent,
    DialogUpdateServiceComponent,
    DialogUpdateGroupComponent,
    DialogCreateGroupComponent,
    DialogConfigGroupsComponent,
  ]
})
export class ServiceModule {}

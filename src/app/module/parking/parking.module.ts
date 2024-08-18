import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ParkingComponent } from './parking.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';

const route: Routes = [{ path: '', component: ParkingComponent }];

@NgModule({
  declarations: [ParkingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
  ],
  providers: [DatePipe],
})
export class ParkingModule {}

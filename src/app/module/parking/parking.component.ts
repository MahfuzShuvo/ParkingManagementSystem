import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VehicleParking } from 'src/app/common/model/vehicleParking';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
})
export class ParkingComponent implements OnInit {
  @ViewChild('parkingModal') parkingModal!: TemplateRef<any>;
  objVehicaleParking: VehicleParking = new VehicleParking();
  lstVehicleParking: VehicleParking[] = [];
  modalType: string = 'Add';
  constructor(
    private modalService: BsModalService,
    private localstorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getAllParking();
  }

  modalRef?: BsModalRef;

  openModal() {
    this.modalType = 'Add';
    this.modalRef = this.modalService.show(this.parkingModal);
  }
  getType(type: number) {
    if (type == 1) {
      return 'Bike';
    } else if (type == 2) {
      return 'Car';
    } else if (type == 3) {
      return 'Bus';
    } else if (type == 4) {
      return 'Cycle';
    } else {
      return '-';
    }
  }

  getAllParking() {
    var storedData = this.localstorageService.getItem('ParkingData');
    // this.lstVehicleParking = JSON.parse() ;
    // this.lstVehicleParking = JSON.parse(JSON.stringify(ss));
    this.lstVehicleParking = this.jsonProcess(storedData);
  }

  jsonProcess(data: string | null) {
    let jsonData = [];
    if (data) {
      try {
        jsonData = JSON.parse(data);
        if (!Array.isArray(jsonData)) {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }

    return jsonData;
  }

  onChangeType(event: any) {
    if (event.target.value != '') {
      if (this.objVehicaleParking.type == 1) {
        this.objVehicaleParking.parkingCharge = 50;
      } else if (this.objVehicaleParking.type == 2) {
        this.objVehicaleParking.parkingCharge = 100;
      } else if (this.objVehicaleParking.type == 3) {
        this.objVehicaleParking.parkingCharge = 150;
      } else if (this.objVehicaleParking.type == 4) {
        this.objVehicaleParking.parkingCharge = 20;
      }
    }
  }

  saveVehicleParking() {
    if (this.objVehicaleParking.type == 0) {
      alert('Vehicle type required');
      return;
    }
    if (this.objVehicaleParking.licenseNumber == '') {
      alert('License number must be required');
      return;
    }
    if (this.objVehicaleParking.ownerPhone == '') {
      alert('Owner phone number must be required');
      return;
    }

    var storage: any[] = this.jsonProcess(
      this.localstorageService.getItem('ParkingData')
    );

    var index = storage.findIndex(
      (x) => x.licenseNumber == this.objVehicaleParking.licenseNumber
    );
    if (index > -1) {
      storage.splice(index, 1);
    }

    storage.push(this.objVehicaleParking);
    this.localstorageService.setItem('ParkingData', JSON.stringify(storage));

    this.getAllParking();

    this.modalRef!.hide();
  }

  changeEntryDate(event: any) {
    this.objVehicaleParking.carEntryDate = event.target.value;
  }

  changeExitDate(event: any) {
    this.objVehicaleParking.carExitDate = event.target.value;
  }

  editParking(data: any) {
    this.objVehicaleParking = data;
    this.openModal();
    this.modalType = 'Edit';
  }
}

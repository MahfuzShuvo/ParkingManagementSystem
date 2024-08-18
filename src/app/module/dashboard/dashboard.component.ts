import { Component, OnInit } from '@angular/core';
import { VehicleParking } from 'src/app/common/model/vehicleParking';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lstVehicleParking: VehicleParking[] = [];
  constructor(private localstorageService: LocalStorageService) {}
  ngOnInit(): void {
    this.getAllParking();
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

  getCount(type: number) {
    if (this.lstVehicleParking.length > 0) {
      var count = this.lstVehicleParking.filter((c) => c.type == type).length;

      return count;
    }
    return 0;
  }
}

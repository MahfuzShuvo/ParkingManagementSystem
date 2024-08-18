export class VehicleParking {
  licenseNumber!: string;
  type: number = 0;
  ownerName!: string;
  ownerPhone!: string;
  ownerAddress!: string;
  carEntryDate!: Date;
  carExitDate!: Date;
  parkingCharge: number = 0;
  parkingStatus!: number;
}

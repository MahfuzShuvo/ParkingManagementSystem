export enum RecordStatus {
  Active = 1,
  Inactive = 2,
  Delete = 9,
}

export enum VehicleType {
  Car = 1,
  Bike = 2,
}
export enum ParkingStatus {
  Out = 0,
  In = 1,
}

export enum ResponseStatus {
  success = 1,
  fail = 2,
  warning = 3,
  internalServerError = 500,
  info = 300,
  unAuthorize = 401,
}

export enum Priority {
  low = 1,
  medium,
  high,
  urgent,
  important,
}

export let monthList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export enum WeekList {
  'Sun' = 1,
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
}

export enum WeekFullNameList {
  'Sunday' = 1,
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
}

export enum Gender {
  Male = 1,
  Female,
}

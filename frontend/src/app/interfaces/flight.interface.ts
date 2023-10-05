export interface Flight {
  id: string;
  flightNumber: string;
  routId: string;
  price: number;
  departureTime: Date;
  arrivalTime: Date;
  capacity: number;
  flightStatus: string;
  createdAt: Date;
  updatedAt: Date;
  isRemoved: boolean;
  notification: string;
}

export type FlightKey = keyof Flight;
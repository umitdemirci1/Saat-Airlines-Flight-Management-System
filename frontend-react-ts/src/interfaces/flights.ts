export type Flight = {
  id: string;
  flightNumber: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  flightStatus: "SCHEDULED" | "DEPARTED" | "ARRIVED" | "CANCELLED" | "DELAYED";
  distanceInMiles: number;
  price: number;
  capacity: number;
  createdAt: string;
  updatedAt: string | null;
  isRemoved: boolean;
  notification: string;
} | null;

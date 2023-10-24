import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { Flight } from "@/interfaces/flights";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFlights() {
  console.log("fetch triggered!");
  return axios
    .get("http://localhost:8080/flights")
    .then((response) => response.data);
}

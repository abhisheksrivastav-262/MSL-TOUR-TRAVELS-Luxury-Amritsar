import { WHATSAPP_NUMBER } from "./data";

export type BookingDetails = {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  date: string;
  time: string;
  vehicle: string;
  tripType: string;
  passengers: string;
  message: string;
};

export function bookingToWhatsApp(d: BookingDetails): string {
  const lines = [
    "*New Booking — MSL TOUR AND TRAVELS*",
    "",
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Pickup: ${d.pickup}`,
    `Drop: ${d.drop}`,
    `Date: ${d.date}`,
    `Time: ${d.time}`,
    `Vehicle: ${d.vehicle}`,
    `Trip Type: ${d.tripType}`,
    `Passengers: ${d.passengers}`,
    `Message: ${d.message || "-"}`,
  ];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function quickWhatsApp(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

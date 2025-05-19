export const locationPins: {
  latitude: number;
  longitude: number;
  timestamp: number;
  speed: number | null;
}[] = [];

export function updateLocationPins(newPins: typeof locationPins) {
  locationPins.length = 0;
  locationPins.push(...newPins);
}

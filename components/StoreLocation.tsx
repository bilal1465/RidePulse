export const locationPins: { latitude: number; longitude: number }[] = [];

export function updateLocationPins(newPins: typeof locationPins) {
  locationPins.length = 0;
  locationPins.push(...newPins);
}

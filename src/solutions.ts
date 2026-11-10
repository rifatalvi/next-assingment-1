// problem 1
function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}
// problem 2
function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}
// problem 3
type CoordinateTuple = readonly [number, number, string];

function formatCoordinate(coordinate: CoordinateTuple): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}
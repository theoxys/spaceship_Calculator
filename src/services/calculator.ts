import moment from 'moment';

const formatConsumables = (consumables: string) => {
  const [num, unit] = consumables.split(' ');
  const timeUnit: any = unit;
  const consumableTime = moment.duration(num, timeUnit).asHours();
  return consumableTime;
};

export const CalculateStops = (mglt: number, consumables: string, distance: number): number => {
  const travelTime = distance / mglt;
  const consumableTime = formatConsumables(consumables);
  const stops = Math.floor(travelTime / consumableTime);
  return stops;
};

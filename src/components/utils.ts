import basketball from './basketball.svg';
import baseball from './baseball.svg';
import boating from './boating-1.svg';
import dogPark from './dog.svg';
import picnic from './picnic-table.svg';
import playground from './playground.svg';
import restrooms from './restrooms.svg';
import skatePark from './skateboarder.svg';
import swimming from './swim.svg';
import tennis from './tennis.svg';

export const allAmenities = [
  'Basketball',
  'Baseball',
  'Boating',
  'Dog Park',
  'Picnic',
  'Playground',
  'Restrooms',
  'Skateboarding',
  'Swimming',
  'Tennis',
];

export const parkAmenities = [
  ['Baseball', 'Picnic', 'Playground', 'Restrooms', 'Tennis'],
  ['Dog Park', 'Playground', 'Restrooms', 'Skateboarding'],
  ['Dog Park', 'Basketball', 'Restrooms'],
  ['Playground', 'Restrooms'],
  ['Skateboarding'],
  ['Basketball', 'Dog Park', 'Picnic'],
  ['Dog Park', 'Picnic', 'Playground', 'Restrooms'],
  ['Baseball', 'Restrooms', 'Tennis', 'Skateboarding'],
];

export const amenityIcons = {
  Basketball: basketball,
  Baseball: baseball,
  Boating: boating,
  'Dog Park': dogPark,
  Picnic: picnic,
  Playground: playground,
  Restrooms: restrooms,
  Skateboarding: skatePark,
  Swimming: swimming,
  Tennis: tennis,
};

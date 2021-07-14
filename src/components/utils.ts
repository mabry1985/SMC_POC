import basketball from './assets/basketball.svg';
import baseball from './assets/baseball.svg';
import boating from './assets/boating-1.svg';
import dogPark from './assets/dog.svg';
import picnic from './assets/picnic-table.svg';
import playground from './assets/playground.svg';
import restrooms from './assets/restrooms.svg';
import skatePark from './assets/skateboarder.svg';
import swimming from './assets/swim.svg';
import tennis from './assets/tennis.svg';

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
  ['Playground', 'Restrooms', 'Swimming'],
  ['Skateboarding'],
  ['Basketball', 'Dog Park', 'Picnic', 'Swimming'],
  ['Dog Park', 'Picnic', 'Playground', 'Restrooms'],
  ['Baseball', 'Restrooms', 'Tennis', 'Skateboarding'],
  ['Playground', 'Restrooms', 'Skateboarding', 'Swimming', 'Tennis'],
  ['Basketball', 'Baseball', 'Boating', 'Dog Park', 'Picnic'],
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

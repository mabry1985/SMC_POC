import basketball from '../images/basketball.svg';
import baseball from '../images/baseball.svg';
import boating from '../images/boating-1.svg';
import dogPark from '../images/dog.svg';
import picnic from '../images/picnic-table.svg';
import playground from '../images/playground.svg';
import restrooms from '../images/restrooms.svg';
import skatePark from '../images/skateboarder.svg';
import swimming from '../images/swim.svg';
import tennis from '../images/tennis.svg';

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

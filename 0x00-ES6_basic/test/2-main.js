/* eslint-disable import/extensions */
/* eslint-disable jest/require-hook */
/* eslint-disable new-cap */
import getNeighborhoodsList from '../2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);

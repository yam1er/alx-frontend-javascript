/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import getResponseFromAPI from '../0-promise.js';

const response = getResponseFromAPI();
console.log(response instanceof Promise);

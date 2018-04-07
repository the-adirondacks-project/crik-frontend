/* tslint:disable */
const axios = require('axios');
const httpAdapter = require('axios/lib/adapters/http');
/* tslint:disable */

import * as nock from 'nock';

beforeAll(function() {
  console.log('the fuck');

  nock.disableNetConnect();

  this.host = 'http://localhost';
});

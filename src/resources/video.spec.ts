import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { InvalidResponseError } from './errors';
import { VideoClient } from './video';
import { Video } from '../types/video';

describe('VideoClient', function() {
  beforeEach(function() {
    this.mock = new MockAdapter(axios);
    this.videoClient = new VideoClient();
  });

  describe('fetchById', function() {
    describe('general behavior', function() {
      beforeEach(function() {
        this.mock.onGet('/api/videos/5').reply(200, {
          id: 5,
          name: 'foo',
        });
      });

      it('fetches a video from the correct url', function(done) {
        spyOn(axios, 'get').and.callThrough();
        this.videoClient.fetchById(5).then((video: Video) => {
          expect(axios.get).toHaveBeenCalledWith('/api/videos/5');
          done();
        }).catch((error: any) => {
          console.log(error);
        });
      });
    });
    
    describe('error handling', function() {
      beforeEach(function() {
        this.mock.onGet('/api/videos/5').reply(200, {
          something: 'invalid',
        });
      });

      it('throws an error when the service response is invalid', function(done) {
        const response = this.videoClient.fetchById(5).catch((error: any) => {
          expect(error instanceof InvalidResponseError).toBeTruthy();

          done();
        });
      });
    });
  });
});

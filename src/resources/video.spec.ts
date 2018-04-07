import * as nock from 'nock';

nock.recorder.rec();

import { InvalidResponseError } from './errors';
import { VideoClient } from './video';

describe('VideoClient', function() {
  beforeEach(function() {
    this.videoClient = new VideoClient();
  });

  describe('fetchById', function() {
    describe('general behavior', function() {
      beforeEach(function() {
        this.fetch = nock(this.host)
          .get('/api/videos/5')
          .reply(200, {
            id: 5,
            name: 'foo',
          });
      });

      it('fetches a video from the correct url', async function(done) {
        nock.disableNetConnect();
        const response = await this.videoClient.fetchById(5);

        expect(this.fetch.isDone()).toBeTruthy();

        done();
      });
    });
    
    describe('error handling', function() {
      beforeEach(function() {
        this.fetch = nock(this.host)
          .get('/api/videos/5')
          .reply(200, {
            something: 'invalid',
          });
      });

      it('throws an error when the service response is invalid', async function(done) {
        try {
          nock.disableNetConnect();
          const response = await this.videoClient.fetchById(5);
        } catch (error) {
          expect(error instanceof InvalidResponseError).toBeTruthy();

          done();
        }
      });
    });
  });
});

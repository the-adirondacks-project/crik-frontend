import { Video } from './video';

describe('Video Type', function() {
  describe('validate', function() {
    it('returns false when `id` is not a number', function() {
      const invalidVideo: any = {
        id: 'foo',
        name: 'bar',
      };

      expect(Video.isValid(invalidVideo)).toBeFalsy();

      invalidVideo.id = {};

      expect(Video.isValid(invalidVideo)).toBeFalsy();

      invalidVideo.id = [];

      expect(Video.isValid(invalidVideo)).toBeFalsy();
    });

    it('returns false when `name` is not a string', function() {
      const invalidVideo: any = {
        id: 5,
        name: 3,
      };

      expect(Video.isValid(invalidVideo)).toBeFalsy();

      invalidVideo.name = {};

      expect(Video.isValid(invalidVideo)).toBeFalsy();

      invalidVideo.name = [];

      expect(Video.isValid(invalidVideo)).toBeFalsy();
    });

    it('returns true when everything is valid', function() {
      const validVideo: any = {
        id: 5,
        name: 'foo',
      };

      expect(Video.isValid(validVideo)).toBeTruthy();
    });
  });

  describe('general', function() {
    it('constructor sets properties', function() {
      const validVideo: any = {
        id: 5,
        name: 'foo',
      };

      const video = new Video(validVideo);

      expect(video.id).toEqual(validVideo.id);
      expect(video.name).toEqual(validVideo.name);
    });

    it('name is changable', function() {
      const validVideo: any = {
        id: 5,
        name: 'foo',
      };

      const video = new Video(validVideo);

      video.name = 'bar';

      expect(video.name).toEqual('bar');
    });
  });
});

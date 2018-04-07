import axios from 'axios';
import * as _ from 'lodash';

import { Client } from './client';
import { Either, Left, Right } from '../utils/either';
import { InvalidResponseError, NotFoundError } from './errors';
import { Video, RawVideo } from '../types/video';

export class VideoClient implements Client<Video> {
  public async fetchAll(): Promise<Video[]> {
    try {
      const response = await axios.get(`/api/videos`);

      const videos = _.map(response.data, (video: RawVideo) => new Video(video));

      return videos;
    } catch (error) {
      // TODO: Fix
      throw new NotFoundError('');
    }
  }

  public async fetchById(id: number): Promise<Video> {
    try {
      const response = await axios.get(`/api/videos/${id}`);

      console.log('foo');
      console.log(response.data);

      if (!Video.isValid(response.data)) {
        throw new InvalidResponseError('Video response data invalid');
      }

      const video = new Video(response.data);

      return video;
    } catch (error) {
      // TODO: Fix
      throw new NotFoundError('');
    }
  }
}

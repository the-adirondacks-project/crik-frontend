import axios from 'axios';
import * as _ from 'lodash';

import { Client } from './client';
import { InvalidResponseError, NotFoundError } from './errors';
import { Video, RawVideo } from '../types/video';

export class VideoClient implements Client<Video> {
  public async fetchAll(): Promise<Video[]> {
    const response = await axios.get(`/api/videos`);

    const videos = _.map(response.data, (video: RawVideo) => new Video(video));

    return videos;
  }

  public async fetchById(id: number): Promise<Video> {
    const response = await axios.get(`/api/videos/${id}`);

    if (!Video.isValid(response.data)) {
      const error = new InvalidResponseError('Video response data invalid');
      throw error;
    }

    const video = new Video(response.data);

    return video;
  }
}

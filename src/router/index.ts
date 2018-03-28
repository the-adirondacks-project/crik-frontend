import VueRouter from 'vue-router';
import Vue from 'vue';

import { LibraryList } from '@components/library-list';
import { VideoList } from '@components/video-list';
import { Video } from '@components/video';
import { VideoPlayer } from '@components/video-player';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Videos',
      component: VideoList,
    },
    {
      path: '/libraries',
      name: 'Libraries',
      component: LibraryList,
    },
    {
      path: '/video/:videoId',
      name: 'Video',
      component: Video,
    },
    {
      path: '/video-player/:fileUrl',
      name: 'Video Player',
      component: VideoPlayer,
    },
  ],
});

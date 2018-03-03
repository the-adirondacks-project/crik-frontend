import VueRouter from 'vue-router';
import Vue from 'vue';

import LibraryList from '@/components/LibraryList';
import VideoList from '@/components/VideoList';
import Video from '@/components/Video';
import VideoPlayer from '@/components/VideoPlayer';

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

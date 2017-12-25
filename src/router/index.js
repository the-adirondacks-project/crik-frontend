import Router from 'vue-router';
import Vue from 'vue';
import VueResource from 'vue-resource';

import LibraryList from '@/components/LibraryList';
import VideoList from '@/components/VideoList';
import Video from '@/components/Video';
import VideoPlayer from '@/components/VideoPlayer';

Vue.use(VueResource);
Vue.use(Router);

export default new Router({
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

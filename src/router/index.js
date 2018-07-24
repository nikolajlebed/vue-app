import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import PostsManager from '@/components/PostsManager';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
      meta: {
        requiresAuth: false
      }
    }
  ]
});

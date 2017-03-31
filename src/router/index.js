import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import Broadcast from '../pages/Broadcast/Broadcast.vue'
import AudioBook from '../pages/AudioBook/AudioBook.vue'
import Group from '../pages/Group/Group.vue'
import Mine from '../pages/Mine/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
     {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

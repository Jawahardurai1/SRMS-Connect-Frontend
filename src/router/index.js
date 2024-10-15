import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Event from '@/components/Event'
import Feedback from '@/components/Feedback'
import bustrack from '@/components/bustrack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Event',
      name: 'Event',
      component: Event
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback
    },
    ,
    {
      path: '/bustrack',
      name: 'bustrack',
      component: bustrack
    }
  ]
})

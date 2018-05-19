import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Chat from '@/components/Chat'
import Registration from '@/components/Registration'

export const routes = [
  {
    path: '/',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    props: true,
    meta: {requiresAuth: true}
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    meta: {requiresAuth: true}
  }
];

import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import LogIn from './components/LogIn.vue'

import DetailDoctor from './components/DetailDoctor.vue'
import DetailPatient from './components/DetailPatient.vue'
import DetailFamiliar from './components/DetailFamiliar.vue'

import UpdateDoctor from './components/UpdateDoctor.vue'
import UpdatePatient from './components/UpdatePatient.vue'
import UpdateFamiliar from './components/UpdateFamiliar.vue'

import ListDestroyDoctor from './components/ListDestroyDoctor.vue'
import ListDestroyPatient from './components/ListDestroyPatient.vue'
import ListDestroyFamiliar from './components/ListDestroyFamiliar.vue'

import SignUpDoctor from './components/SignUpDoctor.vue'
import SignUpPatient from './components/SignUpPatient.vue'
import SignUpFamiliar from './components/SignUpFamiliar.vue'

import NewClinicalHistory from './components/NewClinicalHistory.vue'

import Home from './components/Home.vue'
import Account from './components/Account.vue'

const routes = [{
path: '/',
name: 'root',
component: App
},
{
  path: '/user/logIn',
  name: "logIn",
  component: LogIn
},
 {
   path: '/user/signUpDoctor',
   name: "signUpDoctor",
   component: SignUpDoctor
 },
 {
   path: '/user/signUpPatient',
   name: "signUpPatient",
   component: SignUpPatient
 },
 {
   path: '/user/signUpFamiliar',
   name: "signUpFamiliar",
   component: SignUpFamiliar
 },
 {
   path: '/user/detailDoctor/:id',
   name: "detailDoctor",
   component: DetailDoctor
 },
 {
   path: '/user/detailPatient/:id',
   name: "detailPatient",
   component: DetailPatient
 },
 {
   path: '/user/detailFamiliar/:id',
   name: "detailFamiliar",
   component: DetailFamiliar
 },
 {
   path: '/user/updateDoctor/:id',
   name: "updateDoctor",
   component: UpdateDoctor
 },
 {
   path: '/user/updatePatient/:id',
   name: "updatePatient",
   component: UpdatePatient
 },
 {
   path: '/user/updateFamiliar/:id',
   name: "updateFamiliar",
   component: UpdateFamiliar
 },
 {
   path: '/user/listDestroyDoctor',
   name: "listDestroyDoctor",
   component: ListDestroyDoctor
 },
 {
   path: '/user/listDestroyPatient',
   name: "listDestroyPatient",
   component: ListDestroyPatient
 },
 {
   path: '/user/listDestroyFamiliar',
   name: "listDestroyFamiliar",
   component: ListDestroyFamiliar
 },
 {
  path: '/user/newClinicalHistory',
  name: "newClinicalHistory",
  component: NewClinicalHistory
},
 {
   path: '/user/home',
   name: "home",
   component: Home
 },
 {
   path: '/user/account',
   name: "account",
   component: Account
 }
]
const router = createRouter({
history: createWebHistory(),
routes
})
export default router
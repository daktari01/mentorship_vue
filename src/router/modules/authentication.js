import AuthBase from '../../components/authentication/AuthBase.vue';
import Signup from '../../components/authentication/__includes/signup.vue';

const auth = [
  {
    path: '/auth',
    component: AuthBase,
    children: [
      {
        path: 'signup',
        component: Signup,
      },
    ],
  },
];

export default auth;

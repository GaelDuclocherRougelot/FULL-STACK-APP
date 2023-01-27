import router from '@/router';

export function authGuard(to) {
  let token = localStorage.getItem('token');

  if (token) {
    router.push('/');
  } else {
    return true;
  }
}
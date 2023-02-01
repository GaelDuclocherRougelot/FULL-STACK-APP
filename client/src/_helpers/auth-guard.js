import router from '@/router';

export function authGuard(to) {
  let token = localStorage.getItem('token');

  if (token) {
    router.push('/');
  } else {
    return true;
  }
}

export function authGuardContent(to) {
  let token = localStorage.getItem('token');

  if (token) {
    return true;
  } else {
    router.push('/login');
  }
}
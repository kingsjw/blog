import { headerHeight } from '~/assets/scss/global.scss';

export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  const targetElementId = to.hash.split('#')[1];

  if (targetElementId) {
    const tatgetY = document.querySelector(`[id='${to.hash.split('#')[1]}']`).getBoundingClientRect().top;
    const docY = document.documentElement.getBoundingClientRect().top;

    return window.scrollTo({ top: tatgetY - docY - headerHeight, behavior: 'smooth' });
  }

  return { x: 0, y: 0 };
}
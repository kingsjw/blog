import { headerHeight } from '~/assets/scss/global.scss';

export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }
  if (to.hash) {
    const tatgetY = document.querySelector(decodeURIComponent(to.hash)).getBoundingClientRect().top;
    const docY = document.documentElement.getBoundingClientRect().top;
    return window.scrollTo({ top: tatgetY - docY - headerHeight, behavior: 'smooth' });
  }
  return { x: 0, y: 0 };
}
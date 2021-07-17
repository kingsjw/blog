export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }
  if (to.hash) {
    const target = document.querySelector(decodeURIComponent(to.hash));
    return window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  }
  return { x: 0, y: 0 };
}
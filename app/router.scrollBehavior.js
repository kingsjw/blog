export default function (to, from, savedPosition) {
  if (to.hash) {
    const target = document.querySelector(decodeURIComponent(to.hash));
    return window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  }
}
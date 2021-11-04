const USER_AGENTS = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
export default ({ store, req }) => {
  const userAgent = req.headers['user-agent'];
  const isMobile = USER_AGENTS.some(userAgentKey => userAgent.match(userAgentKey));
  store.commit('device/changeDevice', isMobile);
};
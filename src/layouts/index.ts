const BasicLayout = () => import('./basic.vue');
const AuthPageLayout = () => import('./auth.vue');

const IFrameView = () => import('#/effects/layouts/src').then((m) => m.IFrameView);

export { AuthPageLayout, BasicLayout, IFrameView };

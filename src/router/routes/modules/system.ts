import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:settings',
      order: 10,
      title: $t('page.system.title'),
    },
    name: 'System',
    path: '/system',
    children: [
      {
        name: 'SystemRole',
        path: '/system/role',
        component: () => import('#/views/system/role/list.vue'),
        meta: {
          icon: 'lucide:shield',
          title: $t('page.system.role.list'),
        },
      },
    ],
  },
];

export default routes;

/* eslint-disable no-restricted-imports */
import type { RouteMeta as IRouteMeta } from '#/@core/base/typings/src';

import 'vue-router';

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RouteMeta extends IRouteMeta {}
}

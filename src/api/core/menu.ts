import type { RouteRecordStringComponent } from '#/types/src';

import { requestClient } from '#/api/request';

/**
 * 获取用户所有菜单
 */
export async function getAllMenusApi() {
  return requestClient.get<RouteRecordStringComponent[]>('/menu/all');
}

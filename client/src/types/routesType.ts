// src/routes/types.ts
import { ReactNode } from 'react';

export interface AppRoute {
  path: string;
  element: ReactNode;
  isProtected?: boolean; // true: cần đăng nhập, false: trang khách (login/register)
  title?: string;
  children?: AppRoute[];
}
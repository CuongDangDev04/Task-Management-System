import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute, GuestRoute } from './RouteGuards';

import type { AppRoute } from '@/types/routesType';
import { authRoutes } from '@/modules/auth/routes';
import { taskRoutes } from '@/modules/tasks/routes';
// 1. Mảng tổng hợp toàn bộ routes của toàn hệ thống
export const appRoutesConfig: AppRoute[] = [
  ...authRoutes,
  ...taskRoutes
];

interface AppRoutesProps {
  isAuthenticated: boolean;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated }) => {
  // Lọc tách biệt route công khai và route cần bảo vệ
  const guestRoutes = appRoutesConfig.filter((r) => r.isProtected === false);
  const protectedRoutes = appRoutesConfig.filter((r) => r.isProtected === true);

  return (
    <Routes>
      {/* 1. Nhóm Guest Routes (Login, Register...) */}
      <Route element={<GuestRoute isAuthenticated={isAuthenticated} />}>
        {guestRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      {/* 2. Nhóm Protected Routes (Tasks, Dashboard...) */}
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        {protectedRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      {/* 3. Redirect mặc định và 404 */}
      <Route path="/" element={<Navigate to="/tasks" replace />} />
      <Route path="*" element={<div className="p-8 text-center text-gray-500">404 - Trang không tồn tại</div>} />
    </Routes>
  );
};
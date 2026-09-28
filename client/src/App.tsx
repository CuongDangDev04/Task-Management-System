// src/App.tsx
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuthStore } from './stores/useAuthStore';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore();

  // Kiểm tra cookie session của Sanctum ngay khi ứng dụng khởi động
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Màn hình chờ trong lúc kiểm tra Cookie session
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500 font-medium">Đang kiểm tra phiên đăng nhập...</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppRoutes isAuthenticated={isAuthenticated} />
    </BrowserRouter>
  );
}
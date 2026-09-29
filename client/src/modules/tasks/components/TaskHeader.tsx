type TaskHeaderProps = {
  userName?: string;
  onLogout: () => void;
};

export const TaskHeader = ({ userName, onLogout }: TaskHeaderProps) => {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Task Management System</h1>
          <p className="text-sm text-gray-500">Xin chào, {userName}</p>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
        >
          Đăng xuất
        </button>
      </div>
    </header>
  );
};

import type { AppRoute } from "../../types/routesType";
import TaskPage from "@/modules/tasks/pages/TaskPage";

export const taskRoutes: AppRoute[] = [
  {
    path: "/tasks",
    element: <TaskPage />,
    isProtected: true,
    title: "Dashboard công việc",
  },
];

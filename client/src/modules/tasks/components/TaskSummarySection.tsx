type SummaryTone = "default" | "slate" | "amber" | "emerald";

type SummaryCardProps = {
  label: string;
  value: number;
  tone: SummaryTone;
};

const summaryCardStyles: Record<SummaryTone, string> = {
  default: "border-gray-200 bg-white text-gray-800",
  slate: "border-slate-200 bg-white text-slate-700",
  amber: "border-amber-200 bg-white text-amber-600",
  emerald: "border-emerald-200 bg-white text-emerald-600",
};

const TaskSummaryCard = ({ label, value, tone }: SummaryCardProps) => (
  <div className={`rounded-xl border p-4 shadow-sm ${summaryCardStyles[tone]}`}>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

type TaskSummarySectionProps = {
  tasksCount: number;
  todoCount: number;
  inProgressCount: number;
  completedCount: number;
};

export const TaskSummarySection = ({
  tasksCount,
  todoCount,
  inProgressCount,
  completedCount,
}: TaskSummarySectionProps) => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <TaskSummaryCard label="Tổng task" value={tasksCount} tone="default" />
      <TaskSummaryCard label="Chưa bắt đầu" value={todoCount} tone="slate" />
      <TaskSummaryCard label="Đang thực hiện" value={inProgressCount} tone="amber" />
      <TaskSummaryCard label="Đã hoàn thành" value={completedCount} tone="emerald" />
    </section>
  );
};

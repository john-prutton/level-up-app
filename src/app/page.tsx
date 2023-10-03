import { TotalCard, type TTotalsCard } from "@/components/totals-card";
import { TaskCard } from "@/components/task-card";
import { CreateTask } from "@/components/create-task";
import { getTasks } from "@/lib/api/tasks/queries";

export default async function Home() {
  const { tasks } = await getTasks();

  const incompleteTasks = tasks.filter(function (t) {
    return t.status === "INCOMPLETE";
  });

  const completeTasks = tasks.filter(function (t) {
    return t.status === "COMPLETE";
  });

  const totals: TTotalsCard[] = [
    {
      label: "earned today",
      value:
        completeTasks
          .filter((t) => {
            const yesterday = Date.now() - 24 * 60 * 60 * 1000;

            const d = t.completedAt!.getTime();
            console.log(d);

            return d >= yesterday;
          })
          .reduce((totalsTask, task) => ({
            ...totalsTask,
            points: totalsTask.points + task.points,
          })).points + " pts",
    },
    {
      label: "tasks complete",
      value: completeTasks.length + "",
    },
    {
      label: "left to earn",
      value:
        incompleteTasks.length === 0
          ? "0 pts"
          : incompleteTasks.reduce((totalsTask, task) => ({
              ...totalsTask,
              points: totalsTask.points + task.points,
            })).points + " pts",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl mb-4">Totals</h2>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        {totals.map((element, i) => (
          <TotalCard key={i} data={element} />
        ))}
      </div>

      <h2 className="text-3xl my-4">Create Task</h2>
      <CreateTask />

      <h2 className="text-3xl my-4">Tasks</h2>
      <div className="flex flex-col justify-between gap-2">
        {incompleteTasks.map((task, i) => (
          <TaskCard key={i} data={task} />
        ))}
      </div>
    </div>
  );
}

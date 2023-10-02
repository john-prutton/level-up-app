import { TotalCard, type TTotalsCard } from "@/components/totals-card";
import { TaskCard, type TTaskCard } from "@/components/task-card";
import { CreateTask } from "@/components/create-task";

export default function Home() {
  const totals: TTotalsCard[] = [
    {
      points: 1550,
      label: "today",
    },
    {
      points: 25500,
      label: "this week",
    },
    {
      points: 2500,
      label: "left to earn",
    },
  ];
  const tasks: TTaskCard[] = [
    {
      label: "Do Workout",
      points: 500,
      status: false,
    },
    {
      label: "Clean room",
      points: 500,
      status: false,
    },
    {
      label: "Wash car",
      points: 500,
      status: true,
    },
  ].filter((t) => !t.status);

  return (
    <div>
      <h2 className="text-3xl mb-4">Totals</h2>
      <div className="flex flex-row justify-between gap-2">
        {totals.map((element, i) => (
          <TotalCard key={i} data={element} />
        ))}
      </div>

      <h2 className="text-3xl my-4">Create Task</h2>
      <CreateTask />

      <h2 className="text-3xl my-4">Tasks</h2>
      <div className="flex flex-col justify-between gap-2">
        {tasks.map((element, i) => (
          <TaskCard key={i} data={element} />
        ))}
      </div>
    </div>
  );
}

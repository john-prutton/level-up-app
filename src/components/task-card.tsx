"use client";

import { updateTask } from "@/lib/api/tasks/mutations";
import { NewTask, Task } from "@/lib/db/schema/tasks";
import { CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function TaskCard({
  data: { id, name, points, status },
}: {
  data: Task;
}) {
  const { refresh } = useRouter();

  async function tryUpdateTask() {
    const t: NewTask = {
      name,
      points,
      status: "COMPLETE",
      completedAt: new Date(Date.now() + 2 * 60 * 60 * 1000),
    };

    const { error } = await updateTask(id, t);

    if (error) {
      alert("error: " + error);
      return;
    }

    refresh();
  }

  return (
    <div className="w-full flex flex-row gap-2">
      <div className="border w-full p-4 rounded-md shadow flex flex-row justify-between">
        <p className="font-bold ">{name}</p>
        <p className="">{points} pts</p>
      </div>

      <button onClick={tryUpdateTask} className="border p-4 rounded-md shadow">
        <CheckIcon className=" scale-150" />
      </button>
    </div>
  );
}

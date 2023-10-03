"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";
import { createTask } from "@/lib/api/tasks/mutations";

export function CreateTask() {
  const { refresh } = useRouter();
  const taskNameRef = useRef<HTMLInputElement | null>(null);
  const taskPointsRef = useRef<HTMLInputElement | null>(null);

  async function tryCreateTask() {
    if (!taskNameRef.current || !taskPointsRef.current) {
      alert("error: inputs dont exist");
      return;
    }

    const name = taskNameRef.current.value;
    const points = taskPointsRef.current.valueAsNumber;

    if (name === "") {
      alert("No name");
      return;
    }

    if (Number.isNaN(points)) {
      alert("No points");
      return;
    }

    const newTask = await createTask({
      name: name,
      points: points,
      status: "INCOMPLETE",
    });

    if (newTask.error) {
      alert("There was an error : " + newTask.error);
      return;
    }

    taskNameRef.current.value = "";
    taskPointsRef.current.value = "";

    refresh();
  }

  return (
    <div className="flex flex-row gap-2 items-end">
      <div className="w-2/3">
        <label className="">Task Name</label>
        <input
          ref={taskNameRef}
          className="border rounded-md shadow py-1 px-2 text-xl"
        />
      </div>

      <div className="w-full">
        <label className="">Points</label>
        <input
          ref={taskPointsRef}
          className="border rounded-md shadow py-1 px-2 text-xl w-full"
          type="number"
        />
      </div>

      <button
        onClick={tryCreateTask}
        className="border h-fit p-1 rounded-md shadow w-[36px]"
      >
        <PlusIcon size={28} />
      </button>
    </div>
  );
}

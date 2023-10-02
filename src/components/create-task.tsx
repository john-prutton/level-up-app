"use client";
import { useState, useRef } from "react";
import { PlusIcon } from "lucide-react";

export function CreateTask() {
  const taskNameRef = useRef<HTMLInputElement | null>(null);
  const taskPointsRef = useRef<HTMLInputElement | null>(null);

  function createTask() {
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

    //post task database
    taskNameRef.current.value = "";
    taskPointsRef.current.value = "";
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
        onClick={createTask}
        className="border h-fit p-1 rounded-md shadow w-[36px]"
      >
        <PlusIcon size={28} />
      </button>
    </div>
  );
}

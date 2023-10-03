import { Task } from "@/lib/db/schema/tasks";
import { CheckIcon } from "lucide-react";

export function TaskCard({ data: { name, points, status } }: { data: Task }) {
  return (
    <div className="w-full flex flex-row gap-2">
      <div className="border w-full p-4 rounded-md shadow flex flex-row justify-between">
        <p className="font-bold ">{name}</p>
        <p className="">{points} pts</p>
      </div>
      <div className="border p-4 rounded-md shadow">
        <CheckIcon className=" scale-150" />
      </div>
    </div>
  );
}

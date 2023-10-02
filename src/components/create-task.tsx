import { PlusIcon } from "lucide-react";

export function CreateTask() {
  return (
    <div className="flex flex-row gap-2 items-end">
      <div className="w-2/3">
        <label className="">Task Name</label>
        <input className="border rounded-md shadow py-1 px-2 text-xl" />
      </div>

      <div className="w-full">
        <label className="">Points</label>
        <input
          className="border rounded-md shadow py-1 px-2 text-xl w-full"
          type="number"
        />
      </div>

      <button className="border h-fit p-1 rounded-md shadow w-[36px]">
        <PlusIcon size={28} />
      </button>
    </div>
  );
}

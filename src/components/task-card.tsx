import { CheckIcon } from "lucide-react";

export type TTaskCard = {
  points: number;
  label: string;
  status: boolean;
};

export function TaskCard({
  data: { label, points, status },
}: {
  data: TTaskCard;
}) {
  return (
    <div className="w-full flex flex-row gap-2">
      <div className="border w-full p-4 rounded-md shadow flex flex-row justify-between">
        <p className="font-bold ">{label}</p>
        <p className="">{points} pts</p>
      </div>
      <div className="border p-4 rounded-md shadow">
        <CheckIcon className=" scale-150" />
      </div>
    </div>
  );
}

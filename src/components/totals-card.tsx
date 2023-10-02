export type TTotalsCard = {
  points: number;
  label: string;
};

export function TotalCard({ data: { label, points } }: { data: TTotalsCard }) {
  return (
    <div className="border w-full p-4 rounded-md shadow">
      <p className="text-center font-bold">{points} pts</p>
      <p className="text-center">{label}</p>
    </div>
  );
}

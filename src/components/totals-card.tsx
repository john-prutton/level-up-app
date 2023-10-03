export type TTotalsCard = {
  label: string;
  value: string;
};

export function TotalCard({ data: { label, value } }: { data: TTotalsCard }) {
  return (
    <div className="border w-full p-4 rounded-md shadow flex flex-col justify-center">
      <p className="text-center font-bold">{value}</p>
      <p className="text-center">{label}</p>
    </div>
  );
}

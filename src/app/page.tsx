import { TotalCard, type TTotalsCard } from "@/components/totals-card"

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
	]

	return (
		<div>
			<h1 className="text-3xl">Totals</h1>

			<div className="flex flex-row justify-between gap-2">
				{totals.map((element) => (
					<TotalCard data={element} />
				))}
			</div>
		</div>
	)
}

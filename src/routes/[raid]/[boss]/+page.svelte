<script lang="ts">
	import { averagedOutput } from '$lib/stores/AveragedOutput';
	import { Damage } from '$lib/classes/Damage';
	import Table from '$lib/components/Table.svelte';
	import Radar from '$lib/components/Radar.svelte';
	import daisyuiColors from 'daisyui/src/theming/themes';
	import Hero from '$lib/components/Hero.svelte';
	import { page } from '$app/stores';

	function sort_object(obj: { [Name: string]: Damage }): { [Name: string]: Damage } {
		let sortableArray = Object.entries(obj);
		let sorted = sortableArray.sort(([, a], [, b]) => b.AverageTotal - a.AverageTotal);

		return Object.fromEntries(sorted);
	}

	function GetRadarData() {
		return {
			labels: Object.keys($averagedOutput.AveragedCombatantInfo),
			datasets: [
				{
					data: Object.values($averagedOutput.AveragedCombatantInfo),
					fill: true,
					borderColor: daisyuiColors.dark.primary,
					pointBackgroundColor: daisyuiColors.dark.secondary,
					pointBorderColor: daisyuiColors.dark.primary,
					pointHoverBackgroundColor: daisyuiColors.dark.accent,
					pointHoverBorderColor: daisyuiColors.dark.primary,
					backgroundColor: 'rgba(0,0,0,0)'
				}
			]
		};
	}

	function GetRadarOptions() {
		return {
			plugins: {
				legend: {
					display: false
				},
				tooltip: {
					titleColor: daisyuiColors.dark.accent,
					displayColors: false
				}
			},
			scales: {
				r: {
					pointLabels: {
						color: daisyuiColors.dark.primary
					},
					ticks: {
						color: daisyuiColors.dark.primary,
						backdropColor: 'rgba(0, 0, 0, 0)'
					},
					grid: {
						color: daisyuiColors.dark['base-200']
					},
					angleLines: {
						color: daisyuiColors.dark['base-200']
					}
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			aspectRation: 1
		};
	}
</script>

{#if $averagedOutput?.AveragedDamage !== undefined}
	<div class="flex flex-col items-center flex-1 my-5">
		<Hero backgroundImage={`/${$page.params.boss}.jpg`} />
		<div class="card card-compact bg-neutral flex flex-col md:flex-row gap-5 xl:max-w-[1440px] w-full p-5">

				<div class="card-body bg-base-100 rounded-2xl">
					<h2 class="card-title">Casts</h2>
					<Table data={sort_object($averagedOutput.AveragedDamage)} tableStyles={'w-full'} />
				</div>
				<div class="card-body bg-base-100 rounded-2xl">
					<h2 class="card-title">Buffs</h2>
					<Table data={sort_object($averagedOutput.AveragedDamage)} tableStyles={'w-full'} />
				</div>

		</div>
		<div class="card bg-neutral text-center items-center">
			<h3 class="card-title">Stat Distribution</h3>
			<Radar
				data={GetRadarData()}
				options={GetRadarOptions()}
				classes="h-[27rem] w-[27rem]"
			/>
		</div>
	</div>
{/if}

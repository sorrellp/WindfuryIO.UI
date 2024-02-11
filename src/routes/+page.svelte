<script lang="ts">
	import { averagedOutput } from '$lib/stores/AveragedOutput';
	import { Damage } from '$lib/classes/Damage';
	import Table from '$lib/components/Table.svelte';
	import Radar from '$lib/components/Radar.svelte';

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
					label: 'My data set',
					data: Object.values($averagedOutput.AveragedCombatantInfo),
					fill: true,
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'bg-neutral',
					pointBackgroundColor: 'rgb(25, 99, 132)',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: 'rgb(255, 99, 132)'
				}
			]
		};
	}
</script>

<!-- <h1>On average this is how much damage your spells should do</h1> -->

<!-- {#if $averagedOutput !== undefined}
	{#each Object.entries(sort_object($averagedOutput)) as [key, value]}
		<h2>{key}</h2>
		<h3>{value.AverageTotal}</h3>
		<h3>{value.AverageCasts}</h3>
		<h3>{value.Type}</h3>
		<h3>{value.GUID}</h3>
		<h3>{value.AbilityIcon}</h3>
	{/each}
{/if} -->

{#if $averagedOutput?.AveragedDamage !== undefined}
	<div
		class="flex flex-col md:flex-row min-h-screen justify-center items-center gap-6 flex-wrap xl:w-[1440px]"
	>
		<Table data={sort_object($averagedOutput.AveragedDamage)} tableStyles="flex-1" />
		<Table data={sort_object($averagedOutput.AveragedDamage)} tableStyles="flex-1" />
	</div>
	<div>
		<Radar data={GetRadarData()} />
	</div>
{/if}

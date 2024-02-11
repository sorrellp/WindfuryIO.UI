<script lang="ts">
	import { Damage } from '$lib/classes/Damage';
	import { afterUpdate } from 'svelte';
	import { BackgroundColorMappings, ColorMappings } from '$lib/ts/Constants';

	export let data: { [Name: string]: Damage };
	export let tableStyles: string = '';

	let max = Object.entries(data).reduce((prev, current) =>
		prev && prev[1].AverageTotal > current[1].AverageTotal ? prev : current
	)[1].AverageTotal;
	let sortDescending: boolean = true;

	function sortDamage() {
		sortDescending = !sortDescending;

		let sorted = Object.entries(data).sort(([, a], [, b]) => {
			return sortDescending ? b.AverageTotal - a.AverageTotal : a.AverageTotal - b.AverageTotal;
		});

		data = Object.fromEntries(sorted);
		console.log(data);
		console.log('sorted');
	}

	//This is to get the wowhead tooltips to work correctly otherwise they flash
	afterUpdate(async () => {
		//@ts-ignore: Cannot find name 'WH'
		WH.Tooltips.init();
	});
</script>

<table class="table-auto table-zebra {tableStyles}">
	<thead>
		<tr class="noselect">
			<th>Name</th>
			<th on:click={() => sortDamage()}>Damage</th>
			<th>Casts</th>
		</tr>
	</thead>
	<tbody>
		{#if data !== undefined && data !== null}
			{#each Object.entries(data) as [key, value]}
				<tr class="hover">
					<!-- svelte-ignore a11y-missing-content -->
					<td class={ColorMappings[value.Type] ?? value.Type}
						><a href="https://www.wowhead.com/spell={value.GUID}" /> {key}</td
					>
					<td class="w-1/2"
						><div
							class={BackgroundColorMappings[value.Type] ?? 'bg-slate-500'}
							style="width: calc(100% * {value.AverageTotal / max}; height: 1rem"
						></div></td
					>
					<td class="text-center">{value.AverageCasts}</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>

<style>
	a {
		font-size: 10px;
	}

	.noselect {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
	}
</style>

<script lang="ts">
	import * as Chart from 'chart.js';
	import ChartJS from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let data: any;
	export let options: any;
	export let classes: string;

	onMount(async () => {
		new ChartJS('myChart', {
			type: 'radar',
			data: data,
			options: options
		});
	});
</script>

<div class={classes}>
	<canvas id="myChart"></canvas>
</div>

<script lang="ts">
	import * as Chart from 'chart.js';
	import ChartJS from 'chart.js/auto';

	export let data;

	new ChartJS('myChart', {
		type: 'radar',
		data: data,
		options: {
			plugins: {
				legend: {
					display: false
				}
			},
			responsive: true,
			maintainAspectRatio: false
		}
	});
</script>

<div style="position: relative; height:40vh; width:40vw" class="card bg-neutral">
	<canvas id="myChart"></canvas>
</div>

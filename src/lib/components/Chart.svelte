<script lang="ts">
	import * as Chart from "chart.js";
    import ChartJS from "chart.js/auto";

    export let data: Chart.ChartData;

    // let data = {
    //     labels: ["One", "Two", "Three", "fOUR", "FIVE"],
    //     datasets: [
    //         {
    //             label: 'My data set',
    //             data: [1, 2, 4, 3, 6]
    //         }
    //     ]
    // };
    
    new ChartJS('myChart', {
        type: "bar",
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
</script>

<div>
	<canvas id="myChart"></canvas>
</div>
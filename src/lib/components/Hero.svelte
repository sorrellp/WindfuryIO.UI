<script lang="ts">
	export let backgroundImage: String;
	console.log(backgroundImage);
</script>

<div
	class="hero xl:max-w-[1440px] min-h-96 bg-[radial-gradient(circle,rgba(0,0,0,0),rgb(29,35,42,1)_95%),url({backgroundImage})] [text-shadow:_0_0_50px_rgb(0_0_0)] relative"
>
	<div class="hero-content text-center text-primary w-full">
		<h1>GNARLROOT</h1>
		<div class="absolute bottom-0 left-0 w-full">
			<div class="flex flex-row gap-3 items-center w-full">
				<h2 class="flex-1">100k DPS</h2>
			</div>
		</div>
	</div>
</div>

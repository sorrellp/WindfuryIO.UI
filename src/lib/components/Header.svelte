<script lang="ts">
	import Icon from "./Icon.svelte";
	import { page } from '$app/stores';

	export let headerWrapperClasses: string = '';
</script>

<div class="flex flex-row p-4 w-full justify-between items-center {headerWrapperClasses}">
	<img class="size-10" src="/logo.png" alt="logo" />
	<div class="flex flex-row">
		<Icon selected ={$page.params.boss == 'gnarlroot'} />
		<Icon selected ={$page.params.boss == 'gnarlroot'} />
		<Icon />
		<Icon />
		<Icon />
		<Icon />
		<Icon />
		<Icon />
		<Icon />
	</div>
</div>

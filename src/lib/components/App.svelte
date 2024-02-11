<script lang="ts">
    export let appWrapperClasses: string = '';
</script>

<div id="app-wrapper" class="w-full h-full flex flex-col  {appWrapperClasses}">

	{#if $$slots.header}
		<header class="flex-none z-10 top-0">
            <slot name="header" />
        </header>
	{/if}

	<div id="page-wrapper" class="flex-auto w-full h-full flex style:scrollbar-gutter={'auto'}">
		<div id="content-wrapper" class="flex-1 flex flex-col ">
			<slot />
		</div>
	</div>
</div>

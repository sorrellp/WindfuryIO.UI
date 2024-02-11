<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import App from '$lib/components/App.svelte';
</script>

<App appWrapperClasses="bg-base-100">
	<svelte:fragment slot="header">
		<Header headerWrapperClasses="bg-neutral" />
	</svelte:fragment>

	<slot />
</App>
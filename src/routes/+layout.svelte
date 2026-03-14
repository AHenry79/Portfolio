<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:title" content="Ironpine Web Studio" />
	<meta property="og:description" content="Beautiful, effective websites for small businesses." />
	<meta property="og:image" content="https://ironpineweb.com/og-image.png" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ironpineweb.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://ironpineweb.com/og-image.png" />
</svelte:head>

{@render children()}

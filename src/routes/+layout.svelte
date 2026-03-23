<script lang="ts">
	import '../app.css';

	let { children } = $props();

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: 'Ironpine Web Studio',
		url: 'https://www.ironpineweb.com',
		email: 'austin@ironpineweb.com',
		description: 'Freelance web design and development for small businesses. Custom websites built in Michigan, serving clients remotely nationwide.',
		areaServed: [
			{ '@type': 'State', name: 'Michigan' },
			{ '@type': 'Country', name: 'United States' }
		],
		address: {
			'@type': 'PostalAddress',
			addressRegion: 'MI',
			addressCountry: 'US'
		},
		priceRange: '$$',
		knowsAbout: ['Web Design', 'Web Development', 'SvelteKit', 'React', 'Tailwind CSS', 'Small Business Websites'],
		founder: {
			'@type': 'Person',
			name: 'Austin',
			jobTitle: 'Freelance Web Designer & Developer'
		}
	});

	const jsonLdScript = `<script type="application/ld+json">${jsonLd}<` + `/script>`;
</script>

<svelte:head>
	<!-- Canonical -->
	<link rel="canonical" href="https://www.ironpineweb.com" />

	<!-- Open Graph -->
	<meta property="og:title" content="Ironpine Web Studio" />
	<meta property="og:description" content="Beautiful, effective websites for small businesses." />
	<meta property="og:image" content="https://www.ironpineweb.com/og-image.png" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.ironpineweb.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://www.ironpineweb.com/og-image.png" />

	<!-- JSON-LD structured data -->
	{@html jsonLdScript}
</svelte:head>

{@render children()}

<script lang="ts">
	import Loader       from '$lib/components/Loader.svelte';
	import ProgressBar  from '$lib/components/ProgressBar.svelte';
	import Cursor       from '$lib/components/Cursor.svelte';
	import Nav          from '$lib/components/Nav.svelte';
	import Hero         from '$lib/components/Hero.svelte';
	import Marquee      from '$lib/components/Marquee.svelte';
	import Services     from '$lib/components/Services.svelte';
	import ParallaxBand from '$lib/components/ParallaxBand.svelte';
	import Work         from '$lib/components/Work.svelte';
	import Process      from '$lib/components/Process.svelte';
	import WordReveal   from '$lib/components/WordReveal.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import About        from '$lib/components/About.svelte';
	import Contact      from '$lib/components/Contact.svelte';
	import Footer       from '$lib/components/Footer.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.meta_title()}</title>
	<meta name="description" content={m.meta_desc()} />
</svelte:head>

<Loader />
<ProgressBar />
<Cursor />
<Nav />
<Hero />
<Marquee />
<Services />
<ParallaxBand />
<Work />
<Process />
<WordReveal />
<Testimonials />
<About />
<Contact />
<Footer />

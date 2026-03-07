<script lang="ts">
	import { onMount } from 'svelte';
	const items = ['Svelte', 'TypeScript', 'React', 'Next.js', 'Local SEO', 'Booking Integration', 'Figma', 'Performance', 'Vercel', 'Tailwind CSS', 'GSAP', 'Accessibility'];
	let track: HTMLElement;
	onMount(() => {
		track.innerHTML = [...items, ...items]
			.map(i => `<span class="font-mono text-[0.7rem] tracking-[0.15em] text-mist/40 uppercase px-5 whitespace-nowrap"><b class="text-gold font-normal mr-10">✦</b>${i}</span>`)
			.join('');
	});
</script>

<div class="bg-forest-deep py-5 overflow-hidden" aria-hidden="true">
	<div class="flex w-max hover:[animation-play-state:paused]" style="animation:var(--animate-marquee)" bind:this={track}></div>
</div>

<script lang="ts">
	const items = ['Svelte', 'TypeScript', 'React', 'Next.js', 'Local SEO', 'Booking Integration', 'Figma', 'Performance', 'Vercel', 'Tailwind CSS', 'GSAP', 'Accessibility'];
	const doubled = [...items, ...items];
</script>

<div class="bg-forest-deep py-5 overflow-hidden" aria-hidden="true">
	<div class="flex w-max hover:[animation-play-state:paused]" style="animation:var(--animate-marquee)">
		{#each doubled as item, i (i)}
			<span class="font-mono text-[0.7rem] tracking-[0.15em] text-mist/40 uppercase px-5 whitespace-nowrap">
				<b class="text-gold font-normal mr-10">✦</b>{item}
			</span>
		{/each}
	</div>
</div>
